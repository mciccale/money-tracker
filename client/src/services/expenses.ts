import { IExpense } from '../types';

const baseUrl = 'http://localhost:3000/api/expenses';

export const getAll = async (): Promise<IExpense[]> => {
  const res = await fetch(baseUrl);

  if (!res.ok) {
    throw new Error('Error while fetching data');
  }

  return res.json() as Promise<IExpense[]>;
};

export const create = async (expense: IExpense): Promise<IExpense> => {
  const res = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(expense),
  });

  if (res.status !== 201) {
    throw new Error('Error while fetching data');
  }

  return res.json() as Promise<IExpense>;
};
