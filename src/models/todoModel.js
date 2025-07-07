const {pool} = require('../db');

const getTodos = async () => {
  const result = await pool.query('SELECT * FROM todos ORDER BY created_at DESC');
  return result.rows;
};

const createTodo = async (title) => {
  const result = await pool.query(
    'INSERT INTO todos (title) VALUES ($1) RETURNING *', // RETURNING * - retornar o objeto recém-criado.
    [title]
  );
  return result.rows[0]; // rows[0] novo todo salvo
};

const deleteTodo = async (id) => {
  await pool.query('DELETE FROM todos WHERE id = $1', [id]);
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
};
