import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id!: number;  // O operador "!" indica que o campo será inicializado automaticamente

  @Column()
  idCliente: number;

  @Column('json')
  items: { id: number; name: string; price: number; quantity: number }[];

  @Column('decimal')
  total: number;

  // Construtor para garantir a inicialização
  constructor(idCliente: number, items: { id: number; name: string; price: number; quantity: number }[], total: number) {
    this.idCliente = idCliente;
    this.items = items;
    this.total = total;
  }
}
