import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Set and Get a value in Redis
client.set('key', 'value', redis.print);
client.get('key', (err, reply) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Value:', reply);
  }
  client.quit(); // Close the connection after completion
});
