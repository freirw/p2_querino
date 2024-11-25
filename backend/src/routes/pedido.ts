import express from 'express';
import { PedidoController } from '../controllers/pedidoController';

const router = express.Router();
const pedidoController = PedidoController.getInstance();

router.post('/pedido', (req, res) => pedidoController.processarPedido(req, res));

export default router;
