import axios from 'axios';

export const api = axios.create({
  // baseURL: import.meta.env.VITE_BACK_URL,
  baseURL: 'http://localhost:3000/api/',
});
