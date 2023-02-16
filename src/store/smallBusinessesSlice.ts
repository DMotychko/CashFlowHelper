import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Business } from '../types';

type ExpandActionPayload = {
  businessId: string;
  incomeIncrease: number;
};

const adapter = createEntityAdapter<Business>();

const slice = createSlice({
  name: 'smallBusinesses',
  initialState: adapter.getInitialState(),
  reducers: {
    add: {
      reducer: (state, action: PayloadAction<Business>) => adapter.addOne(state, action.payload),
      prepare: (business: Business) => ({ payload: business })
    },
    expand: {
      reducer: (state, action: PayloadAction<ExpandActionPayload>) => {
        const { businessId, incomeIncrease } = action.payload;
        const business = state.entities[businessId];
        if (business) {
          business.income += incomeIncrease;
        }
      },
      prepare: (businessId: string, incomeIncrease: number) => ({
        payload: {
          businessId,
          incomeIncrease
        }
      })
    }
  }
});

export const { selectAll: selectAllSmallBusinesses, selectById: selectSmallBusinessById, selectIds: selectSmallBusinessIds } = adapter.getSelectors();

export const { add: addSmallBusiness, expand: expandSmallBusiness } = slice.actions;

export default slice.reducer;
