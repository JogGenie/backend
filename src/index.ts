import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import pool, { connect, close } from './database/controller';  // Import the database connection and helper functions

dotenv.config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

const main = async () => {
  // Connect to the database
  await connect();

  // Test Route: Ping the server
  app.get('/', (req: Request, res: Response) => {
    res.send('Server is running');
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  // Handle graceful shutdown to close the DB connection
  process.on('SIGINT', async () => {
    await close();
    process.exit();
  });
};

// Call main function to initialize
main().catch((err) => {
  console.error('Error during initialization', err);
});
