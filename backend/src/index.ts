import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import 'reflect-metadata'; 
import cors from 'cors'; 
import { PedidoController } from './controllers/pedidoController';
dotenv.config();

const app = express();
const pedidoController = PedidoController.getInstance();


app.use(express.json()); 


app.post('/api/pedido', (req, res) => {
  console.log("Corpo da requisição:", req.body); 
  pedidoController.processarPedido(req, res);
});
app.post('/pedidos', PedidoController.getInstance().processarPedido);

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));
