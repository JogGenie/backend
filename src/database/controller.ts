import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function connect(): Promise<void> {
  try {
    await pool.connect();
    console.log('Connected to the database');
  } catch (err: any) {
    console.error('Error connecting to the database', err.message);
  }
}

async function close(): Promise<void> {
  try {
    await pool.end();
    console.log('Database connection closed');
  } catch (err: any) {
    console.error('Error closing the database connection', err.message);
  }
}

