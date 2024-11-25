import axios from 'axios';

// Define a URL base para as requisições da API
axios.defaults.baseURL = 'http://localhost:3000/api'; // Ajuste para a URL do seu backend

export default axios;
