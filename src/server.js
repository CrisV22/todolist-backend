const app = require('./app');
const dotenv = require('dotenv');
const { connectWithRetry } = require('./db');

dotenv.config();
const PORT = process.env.BE_PORT;

(async () => {
  try {
    await connectWithRetry();
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar no banco. Servidor não iniciado.');
    process.exit(1);
  }
})();