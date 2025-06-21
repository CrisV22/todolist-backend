// Apenas inicia o servidor (app.listen)
const app = require('./app');
const PORT = 3000;
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