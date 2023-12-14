import { IExpense } from '../../types';

interface Props {
  expense: IExpense;
}

export default function ExpenseListItem({ expense }: Props) {
  return (
    <li className="grid w-full grid-cols-3 overflow-hidden bg-gray-900 p-3 text-lg font-semibold">
      <span>
        <h3>{expense.name}</h3>
        <p className="font-normal text-gray-300">{expense.description}</p>
      </span>
      <p
        className={`flex items-center justify-center ${
          expense.type === 'expense' ? 'text-red-500' : 'text-green-500'
        }`}
      >
        ${expense.type === 'expense' ? '-' : '+'}
        {expense.price / 100}
      </p>
      <p className="flex items-center justify-end font-normal text-gray-300">
        {expense.date}
      </p>
    </li>
  );
}
