import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";
import { compareHash } from "../utils/hash";

// Simulando um banco de dados com um único usuário
const mockUser = {
  email: "usuario@email.com",
  password: "$2b$10$hG9vWU1oNRVh6J7RHb/AXOKs5DprMYOhMpr.ZhgUHzExyIdLM07Ga", // senha: "123456"
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "E-mail e senha são obrigatórios." });
  }

  // Verifica o e-mail
  if (email !== mockUser.email) {
    return res.status(401).json({ message: "E-mail ou senha inválidos." });
  }

  // Verifica a senha
  const isPasswordValid = await compareHash(password, mockUser.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "E-mail ou senha inválidos." });
  }

  // Gera o token JWT
  const token = generateToken({
    email,
    id: "",
    username: ""
  });

  return res.status(200).json({ message: "Login realizado com sucesso!", token });
};
