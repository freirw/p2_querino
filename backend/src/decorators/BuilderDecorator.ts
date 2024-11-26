import { Request, Response, NextFunction } from 'express';

export function validateBuilder(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (req: Request, res: Response, next: NextFunction) {
    const { idCliente, items } = req.body;

    if (!idCliente || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).send({
        error: 'O pedido deve ter ao menos um item.',
      });
    }

    return originalMethod.apply(this, [req, res, next]);
  };
}
