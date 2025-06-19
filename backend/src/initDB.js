const pool = require('./db');

const init = async () => {
  try {
    console.log("Conectando ao banco...");
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);

    console.log("Extensão UUID ok");
    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Banco de dados inicializado.");
  } catch (err) {
    console.error("❌ Erro ao inicializar o banco:", err);
  }
};

module.exports = init;
