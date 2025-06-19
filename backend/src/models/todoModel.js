let todos = [];
let currentId = 1;

const todoModel = {
  getAll() {
    return todos;
  },

  create(description) {
    const newTodo = { id: currentId++, description };
    todos.push(newTodo);
    return newTodo;
  },

  remove(id) {
    todos = todos.filter((todo) => todo.id !== id);
  }
};

module.exports = todoModel;
