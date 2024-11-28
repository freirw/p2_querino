
export class ClienteSingleton {
    private static instance: ClienteSingleton; 
    private cliente: { id: number; nome: string; email: string } | null = null; 
  
   
    private constructor() {}
  
    public static getInstance(): ClienteSingleton {
      if (!ClienteSingleton.instance) {
        ClienteSingleton.instance = new ClienteSingleton();
      }
      return ClienteSingleton.instance;
    }
  
    public setCliente(cliente: { id: number; nome: string; email: string }) {
      this.cliente = cliente;
    }
  
    public getCliente() {
      return this.cliente;
    }
  
    public resetCliente() {
      this.cliente = null;
    }
  }
  