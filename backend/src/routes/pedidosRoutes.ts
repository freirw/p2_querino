import { Request, Response } from 'express';
import { logExecution } from "../decorators/loggerDecorator";

export class PedidoController {
  private static instance: PedidoController;

  private constructor() {

  }

  public static getInstance(): PedidoController {
    if (!PedidoController.instance) {
      PedidoController.instance = new PedidoController();
    }
    return PedidoController.instance;
  }


  @logExecution
  async processarPedido(req: Request, res: Response) {
    const pedido = req.body; 
    console.log(`Processando pedido: ${JSON.stringify(pedido)}`);

    // Simula o processamento do pedido
    await new Promise((resolve) => setTimeout(resolve, 1000));

   
    return res.status(200).json({
      status: "sucesso",
      pedidoId: pedido.id,
      mensagem: "Pedido processado com sucesso!"
    });
  }
}
