import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  nome?: string;

  @Column()
  endereco?: string;

  @Column()
  cep?: string;

  @Column()
  telefone?: string;

  @Column()
  celular?: string;

  @Column()
  email?: string;

  @Column()
  ultimaContaEnergia?: string;
}
