<<<<<<< HEAD
import express from 'express';
import { DatabaseService } from './databaseService';
import { Cliente } from './models/Cliente';
import 'reflect-metadata'; // Certifique-se de importar isso no início
import cors from 'cors'; // Importando o pacote CORS
import { PedidoController } from './controllers/pedidoController';

const app = express();
const port = 3000;
const pedidoController = PedidoController.getInstance();

// Middleware para processar o corpo das requisições em JSON
app.use(express.json()); // Adicione esta linha antes das rotas para garantir que o corpo seja lido corretamente

// Configuração básica do CORS
app.use(cors({
  origin: 'http://localhost:5173', // Permite requisições somente do frontend local
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
}));

// Endpoint para processar o pedido
app.post('/api/pedido', (req, res) => {
  console.log("Corpo da requisição:", req.body); // Adiciona esse log para garantir que o corpo da requisição está sendo lido
  pedidoController.processarPedido(req, res);
});

// Inicializa a conexão com o banco de dados
const dbService = DatabaseService.getInstance();
dbService.initialize().then(async () => {
  // Após a inicialização, buscamos todos os clientes
  const clientes = await dbService.findAllClientes();
  console.log('Clientes encontrados:', clientes);

  if (clientes.length === 0) {
    console.log('Nenhum cliente encontrado.');
  } else {
    // Exibe os dados de cada cliente
    clientes.forEach(cliente => {
      console.log(`ID: ${cliente.id}, Nome: ${cliente.nome}, Email: ${cliente.email}`);
    });
  }
}).catch((error) => {
  console.error('Erro ao inicializar o banco de dados:', error);
});

// Endpoint para buscar todos os clientes
app.get('/api/cliente', async (req, res) => {
  const dbService = DatabaseService.getInstance();
  const dataSource = dbService.getDataSource();

  // Espera o DataSource estar sincronizado antes de fazer a consulta
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  // Agora usamos o novo DataSource para consultar os dados
  const clientes = await dataSource.getRepository(Cliente).find();

  res.json(clientes);
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
