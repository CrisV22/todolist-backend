const app = require('./app');
const { connectWithRetry } = require('./db');

(async () => {
  try {
    await connectWithRetry();
    app.listen(process.env.BE_PORT, '0.0.0.0', () => {
      console.log(`Server running at port: ${process.env.BE_PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database. Server not running.', error);
    process.exit(1);
  }
})();