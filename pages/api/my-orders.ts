
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import pool from '../../src/db';
import mysql from 'mysql2/promise';

interface DecodedToken {
  userId: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const token = authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, 'e1a8e7f1-1b3a-4b0e-8b0a-9b0c1d9e0f1a') as DecodedToken;

    const userId = decoded.userId;

    const [orders] = await pool.query<mysql.RowDataPacket[]>('SELECT * FROM orders WHERE user_id = ?', [userId]);

    // For each order, fetch the order items
    for (const order of orders) {
      const [items] = await pool.query<mysql.RowDataPacket[]>('SELECT * FROM order_items WHERE order_id = ?', [order.id]);
      order.items = items;
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error('[API /api/my-orders] Error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
}
