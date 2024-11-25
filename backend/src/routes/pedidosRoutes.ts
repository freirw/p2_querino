import { Request, Response } from 'express';
import { logExecution } from "../decorators/loggerDecorator";

export class PedidoController {
  private static instance: PedidoController;

  private constructor() {
    // Construtor privado para evitar instanciação direta
  }

  public static getInstance(): PedidoController {
    if (!PedidoController.instance) {
      PedidoController.instance = new PedidoController();
    }
    return PedidoController.instance;
  }

  // Decorator aplicado ao método
  @logExecution
  async processarPedido(req: Request, res: Response) {
    const pedido = req.body; // Obtém o pedido do corpo da requisição
    console.log(`Processando pedido: ${JSON.stringify(pedido)}`);

    // Simula o processamento do pedido
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Envia a resposta após o processamento
    return res.status(200).json({
      status: "sucesso",
      pedidoId: pedido.id,
      mensagem: "Pedido processado com sucesso!"
    });
  }
}
