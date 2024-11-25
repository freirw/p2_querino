import { Request, Response } from 'express';
import { DatabaseService } from '../databaseService';
import { Pedido } from '../models/Pedido';

export class PedidoController {
  private static instance: PedidoController;

  private constructor() {}

  public static getInstance(): PedidoController {
    if (!PedidoController.instance) {
      PedidoController.instance = new PedidoController();
    }
    return PedidoController.instance;
  }

  public async processarPedido(req: Request, res: Response): Promise<Response> {
    try {
      const { idCliente, items } = req.body;

      if (!idCliente || !items || items.length === 0) {
        return res.status(400).send('Dados inválidos');
      }

      // Calcular o total do pedido
      const total = items.reduce((sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity, 0);

      // Criar o pedido com os parâmetros necessários
      const pedido = new Pedido(idCliente, items, total);

      // Salvar o pedido no banco de dados
      const dbService = DatabaseService.getInstance();
      await dbService.savePedido(pedido);

      // Buscar o pedido recém-criado
      const pedidoSalvo = await dbService.getDataSource().getRepository(Pedido).findOne({ where: { idCliente }, order: { id: 'DESC' } });

      if (!pedidoSalvo) {
        return res.status(404).send('Pedido não encontrado');
      }

      // Retornar o pedido com o formato desejado
      return res.status(201).json(pedidoSalvo);
    } catch (error) {
      console.error('Erro ao processar pedido:', error);
      return res.status(500).send('Erro ao processar o pedido');
    }
  }
}
