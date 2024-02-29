const express = require('express');
require('dotenv').config();
const db = require('./db')
const app = express();
const port = 7100;


app.get('/', async (req, res) => {
  try {
    console.log('Attempting to connect to the database...');
    await db.query('SELECT 1');
    console.log('Database connection successful');
    res.send('Database connected successfully');
  } catch (err) {
    console.error('Error connecting to database:', err);
    res.status(500).send('Database connection failed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
