import { z } from 'zod';

export const ExpenseZodSchema = z
  .object({
    date: z.string().min(1, 'Date is required'),
    description: z.string().optional(),
    name: z.string().min(1, 'Name is required'),
    price: z.number().min(0, 'Price is required'),
    type: z.enum(['expense', 'income']),
  })
  .strict();
