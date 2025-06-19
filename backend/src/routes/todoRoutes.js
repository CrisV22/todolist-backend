const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/todos', todoController.list);
router.post('/todos', todoController.create);
router.delete('/todos/:id', todoController.remove);

module.exports = router;