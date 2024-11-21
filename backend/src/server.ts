// server.ts
import { config } from "./config";
export function startServer(app: any) {
  console.log(`Servidor iniciado na porta ${config.port} com`, app);
}
