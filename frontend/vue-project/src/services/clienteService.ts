import api from './api';

export async function getCliente() {
  try {
    const response = await api.get('/cliente');  
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    throw error;
  }
}
