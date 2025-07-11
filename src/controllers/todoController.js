const todoModel = require('../models/todoModel');

const getHealthCheck = async (req, res) => {
  res.json("listening updated!");
};

const getTodos = async (req, res) => {
  const todos = await todoModel.getTodos();
  res.json(todos);
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required!' });

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
