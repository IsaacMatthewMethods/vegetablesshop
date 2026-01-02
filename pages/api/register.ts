
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import pool from '../../src/db';

const createUsersTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );
    `);
  } catch (error) {
    console.error('Error creating users table:', error);
    throw error;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await createUsersTable();

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const [existingUsers] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error: any) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
