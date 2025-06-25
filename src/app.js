// 	Configura o Express: middlewares, rotas, CORS, etc.

const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
const initDB = require('./initDB');

const app = express();
app.use(cors()); // permite que o React se conecte
app.use(express.json()); // permite enviar JSON no body
app.use('/', todoRoutes); // usa as rotas
initDB(); // Inicializa a tabela ao subir o servidor

module.exports = app;
