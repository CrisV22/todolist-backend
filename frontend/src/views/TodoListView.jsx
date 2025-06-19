import { TodoInput } from '../components/TodoInput';
import { TodoItem } from '../components/TodoItem';
import { useTodoController } from '../controllers/useTodoController';

export function TodoListView() {
  const { todos, addTodo, deleteTodo } = useTodoController();

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <TodoInput onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </main>
  );
}
