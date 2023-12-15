import mongoose from 'mongoose';
import { IExpense } from '../types';

const expenseSchema = new mongoose.Schema<IExpense>({
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['expense', 'income'],
    required: true,
  },
});

expenseSchema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

expenseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const ExpenseModel = mongoose.model<IExpense>('Expense', expenseSchema);

export default ExpenseModel;
