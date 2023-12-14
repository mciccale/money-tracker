import { useState } from 'react';
import { IExpense } from './types';
import { MainContainer, TotalAmmount } from './components';
import { ExpenseForm } from './components/form';
import { ExpensesList } from './components/list';
import { calculateTotal } from './utils/totalAmmount';

export default function App() {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const ammount = calculateTotal(expenses);

  const addExpense = (expense: IExpense) => {
    setExpenses((prevState) => prevState.concat(expense));
  };

  return (
    <MainContainer>
      <TotalAmmount ammount={ammount} />
      <ExpenseForm addExpense={addExpense} />
      <ExpensesList expenses={expenses} />
    </MainContainer>
  );
}
