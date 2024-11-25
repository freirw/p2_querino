// src/services/api.ts

import axios from 'axios';

// Configuração do Axios com a URL base para o backend
const api = axios.create({
  baseURL: 'http://localhost:3000/api',  // URL base do seu backend
});

export default api;
