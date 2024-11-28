import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';


export default class ProdutoService {

  public static async criarPedido(pedido: any): Promise<any> {
    try {
      const response = await axios.post(`${API_BASE_URL}/pedido`, pedido);
      return response.data; 
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      throw error; 
    }
  }

  
  public static async obterPedidos(): Promise<any> {
    try {
      const response = await axios.get(`${API_BASE_URL}/pedidos`);
      return response.data; 
    } catch (error) {
      console.error("Erro ao obter pedidos:", error);
      throw error; 
    }
  }
}
