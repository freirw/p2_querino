import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import 'reflect-metadata'; 
import cors from 'cors'; 
import { PedidoController } from './controllers/pedidoController';
dotenv.config();

const app = express();
const pedidoController = PedidoController.getInstance();

// Middleware para interpretar JSON
app.use(express.json()); // Certifique-se de que express.json() está aqui!

// Verifique o corpo da requisição
app.post('/api/pedido', (req, res) => {
  console.log("Corpo da requisição:", req.body); // Adiciona esse log para garantir que o corpo da requisição está sendo lido
  pedidoController.processarPedido(req, res);
});

// Rotas
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));
