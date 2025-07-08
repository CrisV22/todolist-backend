const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: SSL,
});

const MAX_RETRIES = 10;
const RETRY_DELAY_MS = 3000;

async function connectWithRetry(retries = MAX_RETRIES) {
  try {
    await pool.query('SELECT 1');
    console.log('✅ Database connected!');
    return pool;
  } catch (error) {
    if (retries === 0) {
      console.error('❌ not possible to connect to the database after several retries.');
      throw error;
    }
    console.log(`⏳ Connection failure, retry in ${RETRY_DELAY_MS/1000} seconds... Lacks ${retries} retries.`);
    await new Promise(res => setTimeout(res, RETRY_DELAY_MS));
    return connectWithRetry(retries - 1);
  }
}

module.exports = { pool, connectWithRetry };
