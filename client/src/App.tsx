import { useEffect, useState } from 'react';
import { IExpense } from './types';
import { MainContainer, TotalAmmount } from './components';
import { ExpenseForm } from './components/form';
import { ExpensesList } from './components/list';
import { calculateTotal } from './utils/totalAmmount';
import expensesService from './services/expenses';

export default function App() {
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  const fetchExpenses = async () => {
    try {
      setExpenses(await expensesService.getAll());
    } catch (e) {
      console.error(e);
    }
  };

  const addExpense = (expense: IExpense) => {
    setExpenses((prevState) => prevState.concat(expense));
  };

  const ammount = calculateTotal(expenses);

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <MainContainer>
      <TotalAmmount ammount={ammount} />
      <ExpenseForm addExpense={addExpense} />
      <ExpensesList expenses={expenses} />
    </MainContainer>
  );
}
