import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'sql3.freesqldatabase.com',
  user: 'sql3813285',
  password: 's8vHqw7YSw',
  database: 'sql3813285',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  decimalNumbers: true,
});

export default pool;