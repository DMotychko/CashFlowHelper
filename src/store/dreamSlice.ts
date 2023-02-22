import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Dream } from '../types';

const initialState: Dream = { title: '', price: 0 };

const slice = createSlice({
  name: 'dream',
  initialState,
  reducers: {
    set: {
      reducer: (_, action: PayloadAction<Dream>) => action.payload,
      prepare: (dream: Dream) => ({ payload: dream })
    }
  }
});

export const { set: setDream } = slice.actions;

export default slice.reducer;