import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import clienteRoutes from './routes/clienteRoutes';

const app = express();
app.get('/', (req, res) => {
    res.send('Olá, servidor está funcionando!');
  });
const PORT = 3000;
app.listen(3000, () => {
    console.log('Server running on port 3000');
  });

app.use(express.json());
app.use('/clientes', clienteRoutes);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
