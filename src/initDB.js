const {pool} = require('./db');

const init = async () => {
  try {
    console.log("Connecting to the database...");
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);

    console.log("Extensão UUID ok");
    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Database initialized.");
  } catch (err) {
    console.error("❌ Database not initialized.:", err);
  }
};

module.exports = init;
