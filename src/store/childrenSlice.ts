import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ChildrenExpense } from '../types';

const initialState: ChildrenExpense = { childrenCount: 0, expenseOnChild: 0 };

const slice = createSlice({
  name: 'children',
  initialState,
  reducers: {
    add: (state) => {
      ++state.childrenCount;
    },
    setExpense: {
      reducer: (state, action: PayloadAction<number>) => { state.expenseOnChild = action.payload },
      prepare: (expenseOnChild: number) => ({ payload: expenseOnChild })
    }
  }
});

export const selectChildrenExpense = (state: ChildrenExpense) => state.childrenCount * state.expenseOnChild;

export const { add: addChild, setExpense: setExpenseOnChild } = slice.actions;

export default slice.reducer;
