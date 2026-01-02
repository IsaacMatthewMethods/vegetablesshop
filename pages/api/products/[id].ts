
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../src/db';
import { Product } from '../../../src/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    // This should be a protected route for admins
    try {
      const { name, description, price, image, category_id, stock, unit } = req.body as Product;
      await pool.query(
        'UPDATE products SET name = ?, description = ?, price = ?, image = ?, category_id = ?, stock = ?, unit = ? WHERE id = ?',
        [name, description, price, image, category_id, stock, unit, id]
      );
      const [updatedProduct] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(`[API /api/products/${id} PUT] Error:`, error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'DELETE') {
    // This should be a protected route for admins
    try {
      await pool.query('DELETE FROM products WHERE id = ?', [id]);
      res.status(204).end(); // No content
    } catch (error) {
      console.error(`[API /api/products/${id} DELETE] Error:`, error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
