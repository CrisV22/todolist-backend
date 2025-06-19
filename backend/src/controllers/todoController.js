const todoModel = require('../models/todoModel');

const todoController = {
  list(req, res) {
    const todos = todoModel.getAll();
    res.json(todos);
  },

  create(req, res) {
    const { description } = req.body;
    if (!description) {
      return res.status(400).json({ error: 'Descrição obrigatória' });
    }

    const newTodo = todoModel.create(description);
    res.status(201).json(newTodo);
  },

  remove(req, res) {
    const { id } = req.params;
    todoModel.remove(Number(id));
    res.status(204).send();
  }
};

module.exports = todoController;
