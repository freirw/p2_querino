import { DataSource } from 'typeorm';
import { Cliente } from './models/Cliente';
import { Pedido } from './models/Pedido'; 
import { Item } from './models/Item';

export class DatabaseService {
  private static instance: DatabaseService;
  private dataSource: DataSource;

  private constructor() {
    this.dataSource = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3307, 
      username: 'root',
      password: '',
      database: 'jaegar_resto',
      synchronize: true,
      logging: true,
      entities: [Cliente, Pedido, Item],
    });
  }

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  public async initialize(): Promise<void> {
    try {
      await this.dataSource.initialize();
      console.log('Conexão com o banco de dados estabelecida!');
    } catch (error) {
      console.error('Erro ao conectar com o banco de dados:', error);
    }
  }

  public getDataSource(): DataSource {
    return this.dataSource;
  }

  // Método para buscar todos os clientes
  public async findAllClientes(): Promise<Cliente[]> {
    const clienteRepository = this.dataSource.getRepository(Cliente);
    return await clienteRepository.find(); // Busca todos os clientes
  }



  public async savePedido(pedido: Pedido): Promise<void> {
    const pedidoRepository = this.dataSource.getRepository(Pedido);  // Repositório para o modelo Pedido
    await pedidoRepository.save(pedido);  // Salva o pedido no banco de dados
    console.log('Pedido salvo com sucesso!');
  }
}



