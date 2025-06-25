const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const PORT = process.env.BE_PORT;

const { connectWithRetry } = require('./db');

(async () => {
  try {
    await connectWithRetry(); // aguarda conexão OK no banco antes de iniciar o server
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar no banco. Servidor não iniciado.');
    process.exit(1);
  }
})();