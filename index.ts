import redis, { RedisClientType } from 'redis';

class RedisService {
  private client: RedisClientType | null = null;

  // Initialize the Redis client
  public initialize(): void {
    if (this.client) {
      console.warn('Redis client is already initialized.');
      return;
    }
    this.client = redis.createClient();

    // Handle successful connection
    this.client.on('connect', () => {
      console.log('Connected to Redis');
    });

    // Handle connection errors
    this.client.on('error', (err) => {
      console.error('Redis error:', err);
    });

    // Start the client connection
    this.client.connect().catch((err) => {
      console.error('Failed to connect to Redis:', err);
    });
  }

  // Get the Redis client instance
  public getClient(): RedisClientType {
    if (!this.client) {
      throw new Error('Redis client is not initialized. Call initialize() first.');
    }
    return this.client;
  }

  // Stop the Redis client gracefully
  public stop(): void {
    if (this.client) {
      this.client.quit()
        .then(() => {
          console.log('Redis connection closed.');
          this.client = null; // Reset client
        })
        .catch((err) => {
          console.error('Error closing Redis connection:', err);
        });
    } else {
      console.warn('Redis client is not initialized.');
    }
  }
}

export default RedisService;

