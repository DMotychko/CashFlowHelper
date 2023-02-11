import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Apartment } from '../types';

const adapter = createEntityAdapter<Apartment>();

const slice = createSlice({
  name: 'apartments',
  initialState: adapter.getInitialState(),
  reducers: {
    add: {
      reducer: (state, action: PayloadAction<Apartment>) => adapter.addOne(state, action.payload),
      prepare: (apartment: Apartment) => ({ payload: apartment })
    },
    remove: {
      reducer: (state, action: PayloadAction<string>) => adapter.removeOne(state, action.payload),
      prepare: (apartmentId: string) => ({ payload: apartmentId })
    }
  }
});

export const { selectAll: selectAllApartments, selectById: selectApartmentById, selectIds: selectApartmentIds } = adapter.getSelectors();

export const { add: addApartment, remove: removeApartment } = slice.actions;

export default slice.reducer;
