const app = require('./app');
const { connectWithRetry } = require('./db');

const PORT = 3000;

(async () => {
  try {
    await connectWithRetry();
    app.listen(PORT, () => {
      console.log(`Server running at port: ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database. Server not running.', error);
    process.exit(1);
  }
})();