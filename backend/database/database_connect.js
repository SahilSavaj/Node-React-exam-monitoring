const { Pool } = require('pg');
require('dotenv').config();

module.exports.getClient = async () => {
  const client = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl:{
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
  });
  await client.connect();
  return client;
};