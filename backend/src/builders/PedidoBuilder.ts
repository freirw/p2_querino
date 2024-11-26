import { Pedido } from '../models/Pedido';

export class PedidoBuilder {
  private pedido: Pedido;

  constructor() {
    this.pedido = new Pedido();
    this.pedido.itens = [];
  }

  setIdCliente(idCliente: number): void {
    this.pedido.idCliente = idCliente;
  }

  addItem(id: number, name: string, price: number, quantity: number): void {
    this.pedido.itens.push({
      id, name, price, quantity,
      pedido: new Pedido
    });
  }

  build(): Pedido {
    return this.pedido;
  }
}
