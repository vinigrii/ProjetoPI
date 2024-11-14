import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from './Cliente';
import { Visita } from './Visita';

@Entity('orcamentos')
export class Orcamento {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Cliente)
  cliente?: Cliente;

  @ManyToOne(() => Visita)
  visita?: Visita;

  @Column()
  responsavel?: string;

  @Column('decimal')
  valorKWh?: number;

  @Column('decimal')
  valorMaoObraInstalacao?: number;

  @Column('decimal')
  valorMaoObraHomologacao?: number;

  @Column('decimal')
  desconto?: number;

  @Column()
  formaPagamento?: string;

  @Column()
  prazoInstalacao?: string;

  @Column()
  prazoHomologacao?: string;
}
