import { useEffect, useState } from 'react';
import { todoModel } from '../models/todoModel'; // model = acesso ao banco via API

// Este é o nosso "controller"
export function useTodoController() {
  const [todos, setTodos] = useState([]); // estado para guardar as tarefas

  const fetchTodos = async () => {
    const { data } = await todoModel.getAll(); // Extrai o data da resposta JSON automaticamente
    setTodos(data); // atualiza o estado com as tarefas
  };

  const addTodo = async (title) => {
    const { data } = await todoModel.create(title);
    setTodos((prev) => [...prev, data]);
    // copia todos os itens do array anterior para um novo array + adiciona nova tarefa ao array
  };

  const deleteTodo = async (id) => {
    await todoModel.remove(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id)); // remove do estado
  };

  // Quando a View for carregada, buscar os dados
  useEffect(() => {
    fetchTodos();
  }, []);

  // O que este controller entrega pra View?
  return { todos, addTodo, deleteTodo };
}
