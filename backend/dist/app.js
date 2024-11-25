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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const databaseService_1 = require("./databaseService");
const Cliente_1 = require("./models/Cliente");
require("reflect-metadata"); // Certifique-se de importar isso no início
const dbService = databaseService_1.DatabaseService.getInstance();
dbService.initialize();
const app = (0, express_1.default)();
const port = 3000;
// Endpoint para buscar todos os clientes
app.get('/clientes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbService = databaseService_1.DatabaseService.getInstance();
    const dataSource = dbService.getDataSource();
    // Espera o DataSource estar sincronizado antes de fazer a consulta
    if (!dataSource.isInitialized) {
        yield dataSource.initialize();
    }
    // Agora usamos o novo DataSource para consultar os dados
    const clientes = yield dataSource.getRepository(Cliente_1.Cliente).find();
    res.json(clientes);
}));
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
