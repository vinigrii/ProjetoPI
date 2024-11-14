import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('fornecedores')
export class Fornecedor {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  nomeEmpresa?: string;

  @Column()
  razaoSocial?: string;

  @Column()
  cnpj?: string;

  @Column()
  endereco?: string;

  @Column()
  telefone?: string;

  @Column()
  celular?: string;

  @Column()
  email?: string;

  @Column()
  dadosBancarios?: string;

  @Column()
  formaRecebimento?: string;

  @Column()
  condicaoPagamento?: string;

  @Column()
  tipoTributacao?: string;
}
