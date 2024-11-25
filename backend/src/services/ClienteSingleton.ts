// src/services/ClienteSingleton.ts

export class ClienteSingleton {
    private static instance: ClienteSingleton; // Instância única da classe
    private cliente: { id: number; nome: string; email: string } | null = null; // Dados do cliente
  
    // Construtor privado para evitar múltiplas instâncias
    private constructor() {}
  
    // Método para obter a instância única
    public static getInstance(): ClienteSingleton {
      if (!ClienteSingleton.instance) {
        ClienteSingleton.instance = new ClienteSingleton();
      }
      return ClienteSingleton.instance;
    }
  
    // Configura os dados do cliente
    public setCliente(cliente: { id: number; nome: string; email: string }) {
      this.cliente = cliente;
    }
  
    // Obtém os dados do cliente
    public getCliente() {
      return this.cliente;
    }
  
    // Reseta os dados do cliente (útil para logout ou redefinição)
    public resetCliente() {
      this.cliente = null;
    }
  }
  