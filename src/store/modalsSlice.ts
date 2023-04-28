import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Modal } from '../types/modals/modalSpace';
import { uniqueId } from 'lodash';

const idPrefix = 'modal';

const initialState: Modal[] = [];

const slice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    open: {
      reducer: (state, action: PayloadAction<Modal>) => {
        state.push(action.payload);
      },
      prepare: (modal: Omit<Modal, 'id'>) => ({ payload: { id: uniqueId(idPrefix), ...modal } })
    },
    close: {
      reducer: (state, action: PayloadAction<string>) => state.filter((modal) => modal.id !== action.payload),
      prepare: (modalId: string) => ({ payload: modalId })
    }
  }
});

export const { open: openModal, close: closeModal } = slice.actions;

export default slice.reducer;
