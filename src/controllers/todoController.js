const todoModel = require('../models/todoModel');

const getHealthCheck = async (req, res) => {
  const todos = "Healthy";
  res.json(todos);
};

const getTodos = async (req, res) => {
  const todos = await todoModel.getTodos();
  res.json(todos);
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  // req.body é o corpo da requisição HTTP (geralmente enviado em POST)
  // { title } é desestruturação — extrai diretamente a propriedade title do objeto.
  if (!title) return res.status(400).json({ error: 'Título é obrigatório' });

  const newTodo = await todoModel.createTodo(title);
  res.status(201).json(newTodo);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await todoModel.deleteTodo(id);
  res.status(204).send();
};

module.exports = {
  getHealthCheck,
  getTodos,
  createTodo,
  deleteTodo,
};
