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
exports.login = void 0;
const jwt_1 = require("../utils/jwt");
const hash_1 = require("../utils/hash");
const database_1 = __importDefault(require("../banco/database")); // Importa a conexão com o banco de dados
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "E-mail e senha são obrigatórios." });
    }
    try {
        // Consulta o usuário no banco de dados
        const [rows] = yield database_1.default.execute("SELECT * FROM users WHERE email = ?", [email]);
        if (rows.length === 0) {
            return res.status(401).json({ message: "E-mail ou senha inválidos." });
        }
        const user = rows[0];
        // Verifica a senha
        const isPasswordValid = yield (0, hash_1.compareHash)(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "E-mail ou senha inválidos." });
        }
        // Gera o token JWT
        const token = (0, jwt_1.generateToken)({
            id: user.id,
            email: user.email,
            username: "", // Adicione um valor padrão para username
        });
        return res.status(200).json({ message: "Login realizado com sucesso!", token });
    }
    catch (error) {
        console.error("Erro ao realizar login:", error);
        return res.status(500).json({ message: "Erro interno no servidor." });
    }
});
exports.login = login;
