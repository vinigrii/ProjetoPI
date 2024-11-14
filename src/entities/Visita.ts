import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from './Cliente';

@Entity('visitas')
export class Visita {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Cliente)
  cliente?: Cliente;

  @Column()
  tipoEdificacao?: string;

  @Column('decimal')
  alturaTelhado?: number;

  @Column()
  tipoEstruturaTelhado?: string;

  @Column()
  tipoTelha?: string;

  @Column()
  localizacaoImovel?: string;

  @Column()
  orientacaoTelhado?: string;

  @Column('decimal')
  inclinacaoTelhado?: number;

  @Column()
  pontoAncoragem?: boolean;

  @Column()
  espacoElevacaoPlacas?: boolean;

  @Column()
  informacoesAdicionais?: string;
}
