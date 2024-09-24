import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import pool from './database/controller';  // Import the database connection

dotenv.config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Test Route: Ping the server
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

// Test Database Connection: Fetch all rows from a test table
app.get('/jobgenie_db', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM t1');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Database error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
