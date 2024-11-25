import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";
import { compareHash } from "../utils/hash";
import connection from "../banco/database"; // Importa a conexão com o banco de dados

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "E-mail e senha são obrigatórios." });
  }

  try {
    // Consulta o usuário no banco de dados
    const [rows]: any = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "E-mail ou senha inválidos." });
    }

    const user = rows[0];

    // Verifica a senha
    const isPasswordValid = await compareHash(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "E-mail ou senha inválidos." });
    }

    // Gera o token JWT
    const token = generateToken({
      id: user.id,
      email: user.email,
      username: "", // Adicione um valor padrão para username
    });
    
    return res.status(200).json({ message: "Login realizado com sucesso!", token });
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
};
