import express from 'express';
import { DatabaseService } from './databaseService';
import { Cliente } from './models/Cliente';
import 'reflect-metadata'; 
import cors from 'cors'; 
import { PedidoController } from './controllers/pedidoController';
import { Pedido } from './models/Pedido';

const app = express();
const port = 3000;
const pedidoController = PedidoController.getInstance();

app.use(express.json()); 

// Configuração básica do CORS
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));

app.post('/api/pedido', (req, res) => {
  console.log("Corpo da requisição:", req.body); 
  pedidoController.processarPedido(req, res);
});

app.get('/api/pedidos', async (req, res) => {
  const dbService = DatabaseService.getInstance();
  const dataSource = dbService.getDataSource();

  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  const pedidos = await dataSource.getRepository(Pedido).find();

  res.json(pedidos);
});


const dbService = DatabaseService.getInstance();
dbService.initialize().then(async () => {

  const clientes = await dbService.findAllClientes();
  console.log('Clientes encontrados:', clientes);

  if (clientes.length === 0) {
    console.log('Nenhum cliente encontrado.');
  } else {
   
    clientes.forEach(cliente => {
      console.log(`ID: ${cliente.id}, Nome: ${cliente.nome}, Email: ${cliente.email}`);
    });
  }
}).catch((error) => {
  console.error('Erro ao inicializar o banco de dados:', error);
});


app.get('/api/cliente', async (req, res) => {
  const dbService = DatabaseService.getInstance();
  const dataSource = dbService.getDataSource();


  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }


  const clientes = await dataSource.getRepository(Cliente).find();

  res.json(clientes);
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
