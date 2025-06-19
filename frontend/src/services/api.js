import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000', // back-end local
  // baseURL: 'http://backend:3000', // back-end local
});
