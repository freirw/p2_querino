import api from './api';

// Função para obter o cliente
export async function getCliente() {
  try {
    const response = await api.get('/cliente');  // Rota que vai retornar o cliente
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    throw error;
  }
}
