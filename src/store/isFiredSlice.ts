import { createSlice } from '@reduxjs/toolkit';
import type { StoreState } from './store';

const initialState = false;

const slice = createSlice({
  name: 'isFired',
  initialState,
  reducers: {
    toggle: (state) => !state
  }
});

export const selectIsFired = (state: StoreState) => state.isFired;

export const { toggle: toggleIsFired } = slice.actions;

export default slice.reducer;
