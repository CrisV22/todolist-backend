// 	Configura o Express: middlewares, rotas, CORS, etc.

const express = require('express');
const cors = require('cors');
const initDB = require('./initDB');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors()); // permite que o React se conecte
app.use(express.json()); // permite enviar JSON no body
app.use('/', todoRoutes); // usa as rotas

if (process.env.NODE_ENV === 'development') initDB();

module.exports = app;
