import { IExpense } from '@server/types';
import ExpenseListItem from './expense-list-item';

interface Props {
  expenses: IExpense[];
}

export default function ExpensesList({ expenses }: Props) {
  return (
    <ul className="grid w-full grid-cols-1 divide-y-4 divide-slate-800 pt-10">
      {expenses
        .map((expense) => (
          <ExpenseListItem
            key={`${expense.name}${expense.description}${expense.price}`}
            expense={expense}
          />
        ))
        .reverse()}
    </ul>
  );
}
