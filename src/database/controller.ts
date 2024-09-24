import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const connect = async () => {
  try {
    await pool.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database', err.message);
  }
};

export const close = async () => {
  try {
    await pool.end();
    console.log('Database connection closed');
  } catch (err) {
    console.error('Error closing the database connection', err.message);
  }
};

export default pool;
