import { Request, Response } from "express";

export function logExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const req: Request = args[0];  
    const res: Response = args[1]; 

    const logData = req.body ? { id: req.body.id, item: req.body.item, quantidade: req.body.quantidade } : {};

    console.log(`[LOG] Iniciando execução de: ${propertyKey}`);
    console.log(`[LOG] Parâmetros: ${JSON.stringify(logData)}`);

    try {
      const result = await originalMethod.apply(this, args); 
      return result; 
    } catch (error) {
      console.error(`[LOG] Erro ao executar ${propertyKey}:`, error);
      throw error; 
    }
  };

  return descriptor;
}
