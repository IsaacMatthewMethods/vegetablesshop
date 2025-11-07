
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'lon106.truehost.cloud',
  user: 'dvabxfrr_vegetables',
  password: 'vegetables__1',
  database: 'dvabxfrr_vegetables',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const createUsersTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );
    `);
    console.log('Users table created or already exists');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
};

export default pool;
