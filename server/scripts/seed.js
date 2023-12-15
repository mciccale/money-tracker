import mongoose from 'mongoose';
import { config } from '../utils';
import ExpenseModel from '../expense/expense.model.ts';

const dummyExpenses = [
  {
    date: '2002-02-21',
    description: 'My new expense :(',
    name: 'Expense 1',
    price: 30000,
    type: 'expense',
  },
  {
    date: '2002-02-22',
    description: 'My new income :)',
    name: 'Income 1',
    price: 20000,
    type: 'income',
  },
];

(async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);

    await ExpenseModel.deleteMany({});

    const promiseArray = dummyExpenses.map((expense) =>
      new ExpenseModel(expense).save()
    );

    await Promise.all(promiseArray);

    console.log('Database Seeding Complete!');
  } catch (e) {
    console.error(e);
    return;
  } finally {
    mongoose.connection.close();
  }
})();
