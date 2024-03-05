//Make an env file for this to work!

const { Pool } = require("pg");

const connectionString = process.env.POSTGRES_CONNECTION_URI

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

module.exports = pool;
