
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../src/db';
import { Product } from '../../../src/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const [products] = await pool.query('SELECT * FROM products');
      res.status(200).json(products);
    } catch (error) {
      console.error('[API /api/products GET] Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    // This should be a protected route for admins
    try {
      const { name, description, price, image, category_id, stock, unit } = req.body as Product;
      const [result] = await pool.query(
        'INSERT INTO products (name, description, price, image, category_id, stock, unit) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, description, price, image, category_id, stock, unit]
      );
      const insertId = (result as any).insertId;
      const [newProduct] = await pool.query('SELECT * FROM products WHERE id = ?', [insertId]);
      res.status(201).json(newProduct);
    } catch (error) {
      console.error('[API /api/products POST] Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
