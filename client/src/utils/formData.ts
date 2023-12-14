import { IExpense } from '../types';

export const validateFormData = (expense: IExpense) => {
  return (
    expense.date.length > 0 && expense.name.length > 0 && expense.price > 0
  );
};
