import { api } from '../services/api';

export const todoModel = {
  getAll: () => api.get('/todos'),
  create: (title) => api.post('/todos', { title }),
  remove: (id) => api.delete(`/todos/${id}`)
};
