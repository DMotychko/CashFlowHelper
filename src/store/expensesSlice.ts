import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Expense } from '../types';

const adapter = createEntityAdapter<Expense>();

const slice = createSlice({
  name: 'expenses',
  initialState: adapter.getInitialState(),
  reducers: {
    add: {
      reducer: (state, action: PayloadAction<Expense>) => adapter.addOne(state, action.payload),
      prepare: (expense: Expense) => ({ payload: expense })
    },
    addMany: {
      reducer: (state, action: PayloadAction<Expense[]>) => adapter.addMany(state, action.payload),
      prepare: (expenses: Expense[]) => ({ payload: expenses })
    },
    remove: {
      reducer: (state, action: PayloadAction<string>) => adapter.removeOne(state, action.payload),
      prepare: (expenseId: string) => ({ payload: expenseId })
    }
  }
});

export const { selectAll: selectAllExpenses, selectById: selectExpenseById, selectIds: selectExpenseIds } = adapter.getSelectors();

export const { add: addExpense, addMany: addExpenses, remove: removeExpense } = slice.actions;

export default slice.reducer;
