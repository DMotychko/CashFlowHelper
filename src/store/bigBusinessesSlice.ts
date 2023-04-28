import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Business } from '../types';

const adapter = createEntityAdapter<Business>();

const slice = createSlice({
  name: 'bigBusinesses',
  initialState: adapter.getInitialState(),
  reducers: {
    add: {
      reducer: (state, action: PayloadAction<Business>) => adapter.addOne(state, action.payload),
      prepare: (business: Business) => ({ payload: business })
    }
  }
});

export const { selectAll: selectAllBigBusinesses, selectById: selectBigBusinessById, selectIds: selectBigBusinessIds } = adapter.getSelectors();

export const { add: addBigBusiness } = slice.actions;

export default slice.reducer;
