import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Item } from './Item';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idCliente: number;

  @OneToMany(() => Item, (item) => item.pedido)
  itens: Item[]; // Não inicialize com um array vazio
}
