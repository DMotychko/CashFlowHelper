import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Loan } from '../types';

const adapter = createEntityAdapter<Loan>();

const slice = createSlice({
  name: 'loans',
  initialState: adapter.getInitialState(),
  reducers: {
    add: {
      reducer: (state, action: PayloadAction<Loan>) => adapter.addOne(state, action.payload),
      prepare: (loan: Loan) => ({ payload: loan })
    },
    remove: {
      reducer: (state, action: PayloadAction<string>) => adapter.removeOne(state, action.payload),
      prepare: (loanId: string) => ({ payload: loanId })
    }
  }
});

export const { selectAll: selectAllLoans, selectById: selectLoanById, selectIds: selectLoanIds } = adapter.getSelectors();

export const { add: addLoan, remove: removeLoan } = slice.actions;

export default slice.reducer;
