// src/controllers/pedidoController.ts
import { Request, Response } from 'express';
import { DatabaseService } from '../databaseService';
import { PedidoBuilder } from '../builders/PedidoBuilder';
import { validateBuilder } from '../decorators/BuilderDecorator';

export class PedidoController {
  private static instance: PedidoController;

  private constructor() {}

  // Singleton
  public static getInstance(): PedidoController {
    if (!PedidoController.instance) {
      PedidoController.instance = new PedidoController();
    }
    return PedidoController.instance;
  }

  @validateBuilder
  public async processarPedido(req: Request, res: Response): Promise<void> {
    try {
      const { idCliente, items } = req.body;

      if (!idCliente || !items || !Array.isArray(items)) {
        res.status(400).send({
          error: 'Dados inválidos. Certifique-se de incluir idCliente e items.',
        });
        return; 
      }

      const builder = new PedidoBuilder();
      builder.setIdCliente(idCliente);

      items.forEach((item: any) => {
        if (!item.id || !item.name || !item.price || !item.quantity) {
          throw new Error(
            `Item inválido no pedido: ${JSON.stringify(item)}.`
          );
        }
        builder.addItem(item.id, item.name, item.price, item.quantity);
      });

      const pedido = builder.build();

      const dbService = DatabaseService.getInstance();
      await dbService.savePedido(pedido);

      res.status(201).send({
        message: 'Pedido processado com sucesso!',
        pedido,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Erro ao processar pedido:', error.message);
        res.status(400).send({ error: error.message });
      } else {
        console.error('Erro desconhecido ao processar pedido:', error);
        res.status(500).send({ error: 'Erro desconhecido ao processar pedido.' });
      }
    }
  }
}
