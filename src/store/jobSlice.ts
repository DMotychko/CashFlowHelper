import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Job } from '../types';

const initialState: Job = { title: 'Unemployed', income: 0 };

const slice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    set: {
      reducer: (_, action: PayloadAction<Job>) => action.payload,
      prepare: (job: Job) => ({ payload: job })
    }
  }
});

export const { set: setJob } = slice.actions;

export default slice.reducer;
