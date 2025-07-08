const express = require('express');
const cors = require('cors');
const initDB = require('./initDB');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', todoRoutes);

if (process.env.DB_INIT === 'true') initDB();

module.exports = app;
