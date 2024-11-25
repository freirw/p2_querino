import axios from "axios";

export const getCliente = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/cliente");
    console.log("Dados recebidos do backend:", response.data); // Verifique o que está retornando
    return response.data; // Certifique-se de que o dado é o que você precisa
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
    throw error;
  }
};
