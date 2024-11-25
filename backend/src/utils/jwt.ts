import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export const generateToken = (payload: { id: string; email: string; username?: string }): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};
