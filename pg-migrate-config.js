module.exports = {
  databaseUrl: process.env.DATABASE_URL,  // Load from environment variable
  dir: 'migrations',  // Specify migrations directory
  migrationsTable: 'pg_migrations',  // Name of the migrations table in your database
  direction: 'up'  // Default direction for migration
};

