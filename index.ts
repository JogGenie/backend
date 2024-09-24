import { createClient, RedisClientType } from 'redis';

class RedisService {
  private client: RedisClientType | null = null;

  // Initialize Redis Service
  initialize() {
    if (!this.client) {
      this.client = createClient();

      this.client.on('connect', () => {
        console.log('Connected to Redis');
      });

      this.client.on('error', (err) => {
        console.error('Redis error:', err);
      });

      this.client.connect().catch((err) => {
        console.error('Error connecting to Redis:', err);
      });
    }
  }

  // Return the Redis client
  getClient(): RedisClientType {
    if (!this.client) {
      throw new Error('Redis client is not initialized. Call initialize() first.');
    }
    return this.client;
  }

  // Stop the Redis service
  stop() {
    if (this.client) {
      this.client.quit().then(() => {
        console.log('Redis client disconnected');
      }).catch((err) => {
        console.error('Error disconnecting from Redis:', err);
      }).finally(() => {
        this.client = null;
      });
    }
  }
}

export default new RedisService();
