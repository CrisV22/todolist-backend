import { api } from '../services/api';

export const todoModel = {
  getAll: () => api.get('/todos'),
  create: (description) => api.post('/todos', { description }),
  remove: (id) => api.delete(`/todos/${id}`)
};
