const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DB_INIT:', process.env.DB_INIT);
console.log('ssl:', process.env.DB_SSL);
const SSL = process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false;
console.log('SSL:', SSL);

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
