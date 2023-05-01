import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Modal, ModalName, ModalWithId } from '../types/modals/modalSpace';

type ModalUnion = {
  [name in ModalName]: Modal<name>;
}[ModalName];

type ModalWithIdUnion = {
  [name in ModalName]: ModalWithId<name>;
}[ModalName];

const idPrefix = 'modal';

const initialState: ModalWithIdUnion[] = [];

const slice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    open: {
      reducer: (state, action: PayloadAction<ModalWithIdUnion>) => {
        state.push(action.payload);
      },
      prepare: (modal: ModalUnion) => ({ payload: { id: uniqueId(idPrefix), ...modal } })
    },
    close: {
      reducer: (state, action: PayloadAction<string>) => state.filter((modal) => modal.id !== action.payload),
      prepare: (modalId: string) => ({ payload: modalId })
    }
  }
});

export const { open: openModal, close: closeModal } = slice.actions;

export default slice.reducer;
