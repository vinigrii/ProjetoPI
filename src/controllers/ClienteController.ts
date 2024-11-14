import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Cliente } from '../entities/Cliente';

export class ClienteController {
  static async create(req: Request, res: Response) {
    const { nome, endereco, cep, telefone, celular, email, ultima_conta_energia } = req.body;
    const cliente = new Cliente();
    cliente.nome = nome;
    cliente.endereco = endereco;
    cliente.cep = cep;
    cliente.telefone = telefone;
    cliente.celular = celular;
    cliente.email = email;
    cliente.ultimaContaEnergia = ultima_conta_energia;

    const clienteRepository = AppDataSource.getRepository(Cliente);
    await clienteRepository.save(cliente);
    return res.status(201).json(cliente);
  }

}
