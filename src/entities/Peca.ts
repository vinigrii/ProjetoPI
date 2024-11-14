import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pecas')
export class Peca {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  descricao?: string;

  @Column()
  especificacao?: string;

  @Column()
  fabricante?: string;

  @Column('decimal')
  valorUnitario?: number;

  @Column()
  ncm?: string;

  @Column()
  leadTime?: string;

  @Column()
  garantia?: string;
}
