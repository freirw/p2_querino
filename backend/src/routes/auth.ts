import express, { Request, Response } from "express";

const router = express.Router();

// Função assíncrona de rota para login
router.post("/login", async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await findUser(req.body.username); // Simulação de busca
        res.json(user); // Retorna o usuário encontrado
    } catch (error) {
        res.status(500).json({ message: "Erro interno no servidor" });
    }
});

export default router;

// Função fictícia de busca de usuário
function findUser(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
        if (username === "test") {
            resolve({ username: "test", name: "Test User" });
        } else {
            reject(new Error("Usuário não encontrado"));
        }
    });
}
