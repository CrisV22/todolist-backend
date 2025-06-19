// const todoModel = require('../models/todoModel');

// const todoController = {
//   list(req, res) {
//     const todos = todoModel.getAll();
//     res.json(todos);
//   },

//   create(req, res) {
//     const { description } = req.body;
//     if (!description) {
//       return res.status(400).json({ error: 'Descrição obrigatória' });
//     }

//     const newTodo = todoModel.create(description);
//     res.status(201).json(newTodo);
//   },

//   remove(req, res) {
//     const { id } = req.params;
//     todoModel.remove(Number(id));
//     res.status(204).send();
//   }
// };

// module.exports = todoController;

const todoModel = require('../models/todoModel');

// GET /todos
const getTodos = async (req, res) => {
  const todos = await todoModel.getTodos();
  res.json(todos);
};

// POST /todos
const createTodo = async (req, res) => {
  const { title } = req.body;
  // req.body é o corpo da requisição HTTP (geralmente enviado em POST)
  // { title } é desestruturação — extrai diretamente a propriedade title do objeto.
  if (!title) return res.status(400).json({ error: 'Título é obrigatório' });

  const newTodo = await todoModel.createTodo(title);
  res.status(201).json(newTodo);
};

// DELETE /todos/:id
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await todoModel.deleteTodo(id);
  res.status(204).send();
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
};
