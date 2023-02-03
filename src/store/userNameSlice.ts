import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

const slice = createSlice({
    name: 'userName',
    initialState,
    reducers: {
        set: {
            reducer: (_, action: PayloadAction<string>) => action.payload,
            prepare: (userName: string) => ({ payload: userName })
        }
    }
});

export const { set: setUserName } = slice.actions;

export default slice.reducer;