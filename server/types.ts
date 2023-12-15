export interface IExpense {
  date: string;
  description: string;
  name: string;
  price: number;
  type: 'expense' | 'income';
}
