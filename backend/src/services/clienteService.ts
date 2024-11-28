import axios from "axios";

export const getCliente = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/cliente");
    console.log("Dados recebidos do backend:", response.data); 
    return response.data; 
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
    throw error;
  }
};
