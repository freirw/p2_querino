import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Cliente } from '../models/Cliente';
import { ClienteSingleton } from '../services/ClienteSingleton';
import bcrypt from 'bcryptjs';

const router = express.Router(); 

router.get('/clientes', async (req: Request, res: Response) => {
  try {
    const clienteRepository = getRepository(Cliente);
    const clientes = await clienteRepository.find();

    return res.json(clientes); 
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    return res.status(500).json({ error: 'Erro ao buscar clientes.' });
  }
});


router.get('/cliente/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const clienteRepository = getRepository(Cliente);
    const cliente = await clienteRepository.findOne({ where: { id: Number(id) } });


    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado.' });
    }

    ClienteSingleton.getInstance().setCliente(cliente);

    return res.json(cliente); 
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    return res.status(500).json({ error: 'Erro ao buscar cliente.' });
  }
});

router.post('/clientes', async (req: Request, res: Response) => {
  const { nome, email } = req.body;

  try {
    const clienteRepository = getRepository(Cliente);
    const novoCliente = clienteRepository.create({ nome, email });
    const clienteSalvo = await clienteRepository.save(novoCliente);

    return res.status(201).json(clienteSalvo);
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    return res.status(500).json({ error: 'Erro ao criar cliente.' });
  }
});

interface LoginRequestBody {
  email: string;
  senha: string;
}

router.post('/login', async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
  const { email, senha } = req.body;

  try {
    const clienteRepository = getRepository(Cliente);
    const cliente = await clienteRepository.findOne({ where: { email } });

    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado.' });
    }

  
    const senhaValida = await bcrypt.compare(senha, cliente.senha);

    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }


    ClienteSingleton.getInstance().setCliente(cliente);

    return res.json({ message: 'Login bem-sucedido!', cliente });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ error: 'Erro ao autenticar cliente.' });
  }
});

export default router;
