//Make an env file for this to work!

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });  
try{
  pool.connect();
  console.log("Database Connected")
}catch(err){
  console.log(err)
}

module.exports=pool