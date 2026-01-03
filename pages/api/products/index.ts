
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../src/db';
import { Product } from '../../../src/types';
import { products as initialProducts } from '../../../src/data/products';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Seeding logic removed from GET request.
      // Ensure your database is seeded separately, e.g., by running sql3813285.sql once.

      const [products] = await pool.query(`
        SELECT p.*, c.name as category 
        FROM products p 
        LEFT JOIN categories c ON p.category_id = c.id
      `);
      console.log('Fetched products from DB:', products);
      if (Array.isArray(products) && products.length === 0) {
        // If no products in DB, return initial products
        console.log('No products in DB, returning initial products');
        res.status(200).json(initialProducts);
      } else {
        // Convert id to string to match the interface
        const formattedProducts = products.map((product: any) => ({
          ...product,
          id: product.id.toString(),
          category: product.category || 'uncategorized', // Ensure category is a string
        }));
        console.log('Returning formatted products:', formattedProducts);
        res.status(200).json(formattedProducts);
      }
    } catch (error) {
      console.error('[API /api/products GET] Error:', error);
      // Fallback to initial products on error
      res.status(200).json(initialProducts);
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
