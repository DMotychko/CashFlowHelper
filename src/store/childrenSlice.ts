import { createSlice } from '@reduxjs/toolkit';
import type { ChildrenExpense } from '../types';

const initialState: ChildrenExpense = { childrenCount: 0, expenseOnChild: 0 };

const slice = createSlice({
  name: 'children',
  initialState,
  reducers: {
    add: (state) => {
      ++state.childrenCount;
    }
  }
});

export const selectChildrenExpense = (state: ChildrenExpense) => state.childrenCount * state.expenseOnChild;

export const { add: addChild } = slice.actions;

export default slice.reducer;
