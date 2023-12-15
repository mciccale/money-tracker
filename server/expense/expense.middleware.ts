import { Request, Response, NextFunction } from 'express';
import { ExpenseZodSchema } from './expense.validation';

export const validateExpense = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body = ExpenseZodSchema.parse(req.body);
    next();
  } catch (e) {
    res.status(400).json(e);
  }
};
