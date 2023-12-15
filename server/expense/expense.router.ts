import { Router } from 'express';
import ExpenseController from './expense.controller';
import { validateExpense } from './expense.middleware';

const expenseRouter = Router();

expenseRouter.get('/', ExpenseController.getAll);
expenseRouter.post('/', validateExpense, ExpenseController.create);
expenseRouter.delete('/:id', ExpenseController.delete);

export default expenseRouter;
