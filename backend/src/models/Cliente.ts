// src/models/Cliente.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string; // Adiciona a propriedade senha ao modelo

  constructor(id: number, nome: string, email: string, senha: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}
