import express from 'express';
import cors from 'cors';
import expenseRouter from './expense/expense.router';
import { dbConnect } from './utils/dbConnect';

dbConnect();

const app = express();

app.disable('x-powered-by');

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.use(express.json());

app.use('/api/expenses', expenseRouter);

export default app;
