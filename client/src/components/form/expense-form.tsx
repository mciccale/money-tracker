import { useRef, useState } from 'react';
import ExpenseInput from './expense-input';
import ExpenseButton from './expense-button';
import ExpenseToggle from './expense-toggle';
import { IExpense } from '@server/types';
import { validateFormData } from '../../utils/formData';
import expensesService from '../../services/expenses';

interface Props {
  addExpense: (expense: IExpense) => void;
}

export default function ExpenseForm({ addExpense }: Props) {
  const alertRef = useRef<HTMLParagraphElement>(null);

  const [formState, setFormState] = useState<IExpense>({
    date: '',
    description: '',
    name: '',
    price: 0,
    type: 'expense',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateFormData(formState)) {
      if (alertRef.current) {
        alertRef.current.style.display = 'block';
      }

      throw new Error('Form Data Invalid');
    }

    const newExpense = { ...formState, price: formState.price * 100 };

    expensesService.create(newExpense);

    addExpense(newExpense);

    setFormState({
      date: '',
      description: '',
      name: '',
      price: 0,
      type: formState.type,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (alertRef.current) {
      alertRef.current.style.display = 'none';
    }

    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    setFormState((prevState) => ({
      ...prevState,
      type: prevState.type === 'expense' ? 'income' : 'expense',
    }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid w-full grid-cols-4 gap-4 pt-5"
      >
        <ExpenseInput
          className="w-full rounded-lg bg-gray-700 p-3 font-semibold"
          name="name"
          placeholder="Name"
          value={formState.name}
          handleChange={handleChange}
        />
        <ExpenseInput
          className="remove-arrow w-full rounded-lg bg-gray-700 p-3 font-semibold"
          name="price"
          placeholder="Price"
          type="number"
          value={formState.price}
          handleChange={handleChange}
        />
        <ExpenseToggle
          className="w-full rounded-lg bg-gray-700 p-3 font-semibold"
          handleClick={handleClick}
          type={formState.type}
        />
        <ExpenseInput
          className="w-full rounded-lg bg-gray-700 p-3 font-semibold"
          name="date"
          placeholder="Date"
          type="date"
          value={formState.date}
          handleChange={handleChange}
        />
        <ExpenseInput
          className="col-span-4 w-full rounded-lg bg-gray-700 p-3"
          name="description"
          placeholder="Description"
          value={formState.description}
          handleChange={handleChange}
        />
        <ExpenseButton
          className="col-span-4 w-full rounded-lg bg-yellow-700 p-3 font-semibold"
          label="REGISTER"
        />
      </form>
      <p
        ref={alertRef}
        role="alert"
        className="hidden pt-10 text-xl font-bold text-red-500"
      >
        All fields must be Defined
      </p>
    </>
  );
}
