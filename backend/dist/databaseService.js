"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./models/Cliente");
// Classe DatabaseService que implementa o Singleton
class DatabaseService {
    // Construtor privado para impedir instâncias externas
    constructor() {
        this.dataSource = new typeorm_1.DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306, // sua porta do MySQL
            username: 'root',
            password: '',
            database: 'jaegar_resto',
            synchronize: true,
            logging: false,
            entities: [Cliente_1.Cliente], // Adicione os modelos aqui
        });
    }
    // Método estático para obter a instância única (Singleton)
    static getInstance() {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService();
        }
        return DatabaseService.instance;
    }
    // Método para inicializar a conexão com o banco
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.dataSource.initialize();
                console.log('Conexão com o banco de dados estabelecida!');
            }
            catch (error) {
                console.error('Erro ao conectar com o banco de dados:', error);
            }
        });
    }
    // Método para acessar o DataSource
    getDataSource() {
        return this.dataSource;
    }
}
exports.DatabaseService = DatabaseService;
