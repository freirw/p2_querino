// src/services/pedidoService.ts
import axios from 'axios';

// URL base da API
const API_BASE_URL = 'http://localhost:3000/api';


export default class ProdutoService {

  // Método para criar um pedido
  public static async criarPedido(pedido: any): Promise<any> {
    try {
      const response = await axios.post(`${API_BASE_URL}/pedido`, pedido);
      return response.data; // Retorna os dados da resposta
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      throw error; // Lança o erro para ser tratado em outro lugar
    }
  }

  // Método para obter todos os pedidos
  public static async obterPedidos(): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/pedidos`);
      return response.data; // Retorna os dados dos pedidos
    } catch (error) {
      console.error("Erro ao obter pedidos:", error);
      throw error; // Lança o erro para ser tratado em outro lugar
    }
  }
}
