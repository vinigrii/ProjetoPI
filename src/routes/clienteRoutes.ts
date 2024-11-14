import { Router } from 'express';
import { ClienteController } from '../controllers/ClienteController';

const router = Router();


router.post('/clientes', (req, res) => {
  // Lógica para criar um cliente
  res.send('Cliente criado');
});

// Rota para obter todos os clientes
router.get('/clientes', (req, res) => {
  // Lógica para obter clientes
  res.send('Lista de clientes');
});

export default router;
