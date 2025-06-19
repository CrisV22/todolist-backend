// let todos = [];
// let currentId = 1;

// const todoModel = {
//   getAll() {
//     return todos;
//   },

//   create(description) {
//     const newTodo = { id: currentId++, description };
//     todos.push(newTodo);
//     return newTodo;
//   },

//   remove(id) {
//     todos = todos.filter((todo) => todo.id !== id);
//   }
// };

// module.exports = todoModel;

const pool = require('../db');

// Buscar todas as tarefas
const getTodos = async () => {
  const result = await pool.query('SELECT * FROM todos ORDER BY created_at DESC');
  return result.rows;
};

// Criar uma nova tarefa
const createTodo = async (title) => {
  const result = await pool.query(
    'INSERT INTO todos (title) VALUES ($1) RETURNING *', // RETURNING * - retornar o objeto recém-criado.
    [title]
  );
  return result.rows[0]; // rows[0] novo todo salvo
};

// Deletar uma tarefa
const deleteTodo = async (id) => {
  await pool.query('DELETE FROM todos WHERE id = $1', [id]);
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
};
