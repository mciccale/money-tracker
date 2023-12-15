import { IExpense } from '../types';
import ExpenseModel from './expense.model';

class ExpenseService {
  static getAll = async (): Promise<IExpense[]> => {
    return ExpenseModel.find({});
  };

  static create = async (newExpense: IExpense): Promise<IExpense> => {
    return new ExpenseModel(newExpense).save();
  };
}

export default ExpenseService;
