import jwt from "jsonwebtoken";

// Função para verificar o token
export const verifyToken = (token: string): string | jwt.JwtPayload => {
  const secret = process.env.JWT_SECRET || "default_secret";
  const decoded = jwt.verify(token, secret); // Agora 'token' está declarado
  return decoded;
};

export const generateToken = (user: { id: string; username: string; email: string }): string => {
    const secret = process.env.JWT_SECRET || "default_secret";
    const payload = { id: user.id, username: user.username, email: user.email };
    const options = { expiresIn: "1h" }; // O token expirará em 1 hora
    return jwt.sign(payload, secret, options); // Gera o token JWT
  };
