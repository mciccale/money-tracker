import { IExpense } from '../types';

export const calculateTotal = (expenses: IExpense[]): number => {
  return expenses.reduce<number>((acc: number, { price, type }: IExpense) => {
    return type === 'expense' ? acc - price : acc + price;
  }, 0);
};
