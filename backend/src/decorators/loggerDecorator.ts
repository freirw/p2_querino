import { Request, Response } from "express";

// Função para logar a execução de um método
export function logExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const req: Request = args[0];  // A requisição (primeiro argumento)
    const res: Response = args[1]; // A resposta (segundo argumento)

    // Verifica se há dados no corpo da requisição e loga apenas os dados relevantes
    const logData = req.body ? { id: req.body.id, item: req.body.item, quantidade: req.body.quantidade } : {};

    // Log de execução do método
    console.log(`[LOG] Iniciando execução de: ${propertyKey}`);
    console.log(`[LOG] Parâmetros: ${JSON.stringify(logData)}`);

    try {
      const result = await originalMethod.apply(this, args); // Executa o método original
      return result; // Retorna o resultado
    } catch (error) {
      console.error(`[LOG] Erro ao executar ${propertyKey}:`, error);
      throw error; // Lança o erro novamente
    }
  };

  return descriptor;
}
