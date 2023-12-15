import { IExpense } from '@server/types';

const baseUrl = 'http://localhost:3000/api/expenses';

const getAll = async (): Promise<IExpense[]> => {
  const res = await fetch(baseUrl);

  if (!res.ok) {
    throw new Error('Error while fetching data');
  }

  return res.json() as Promise<IExpense[]>;
};

const create = async (expense: IExpense): Promise<IExpense> => {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(expense),
  });

  if (res.status !== 201) {
    throw new Error('Error while fetching data');
  }

  return res.json() as Promise<IExpense>;
};

export default { getAll, create };
