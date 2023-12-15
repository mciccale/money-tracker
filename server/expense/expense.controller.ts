import { Request, Response } from 'express';
import ExpenseService from './expense.service';
import { IExpense } from '../types';

class ExpenseController {
  static getAll = async (req: Request, res: Response) => {
    const expenses = await ExpenseService.getAll();
    res.status(200).json(expenses);
  };

  static create = async (req: Request, res: Response): Promise<void> => {
    try {
      const newExpense: IExpense = req.body;

      const createdExpense = await ExpenseService.create(newExpense);

      res.status(201).json(createdExpense);
    } catch (e) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  static delete = async (req: Request, res: Response) => {};
}

export default ExpenseController;
