
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import pool from '../../src/db';
import mysql from 'mysql2/promise';
import { CartItem } from '../../src/types';

interface DecodedToken {
  userId: number;
}

interface OrderRequestBody {
  address: string;
  phone: string;
  cart: CartItem[];
  total: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const token = authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  let connection: mysql.PoolConnection | null = null;

  try {
    const decoded = jwt.verify(token, 'e1a8e7f1-1b3a-4b0e-8b0a-9b0c1d9e0f1a') as DecodedToken;
    const userId = decoded.userId;

    const { address, phone, cart, total }: OrderRequestBody = req.body;

    connection = await pool.getConnection();
    await connection.beginTransaction();

    const [orderResult] = await connection.query(
      'INSERT INTO orders (user_id, total, status, address, phone) VALUES (?, ?, ?, ?, ?)',
      [userId, total, 'pending', address, phone]
    );
    
    const orderId = (orderResult as any).insertId;

    const orderItems = cart.map(item => [orderId, item.id, item.quantity, item.price]);

    await connection.query(
      'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?',
      [orderItems]
    );

    // Decrement product stock
    for (const item of cart) {
      await connection.query(
        'UPDATE products SET stock = stock - ? WHERE id = ?',
        [item.quantity, item.id]
      );
    }

    await connection.commit();

    // Fetch the newly created order to return it
    const [newOrder] = await connection.query<mysql.RowDataPacket[]>('SELECT * FROM orders WHERE id = ?', [orderId]);
    const [newOrderItems] = await connection.query<mysql.RowDataPacket[]>('SELECT * FROM order_items WHERE order_id = ?', [orderId]);
    
    (newOrder[0] as any).items = newOrderItems;

    res.status(201).json(newOrder[0]);

  } catch (error) {
    if (connection) {
      await connection.rollback();
    }
    console.error('[API /api/orders] Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
