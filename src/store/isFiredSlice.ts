import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const slice = createSlice({
    name: 'isFired',
    initialState,
    reducers: {
        toggle: state => !state
    }
});

export const { toggle: toggleIsFired } = slice.actions;

export default slice.reducer;