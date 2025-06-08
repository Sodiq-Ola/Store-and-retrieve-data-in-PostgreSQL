const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        // <-- Replace with your actual PostgreSQL username
  host: 'localhost',
  database: 'userdb',      // <-- Make sure this database exists
  password: 'olaadua', // <-- Replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;