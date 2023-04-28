import actions from './actions';
import type { Action } from '@reduxjs/toolkit';

export const clearState = (): Action => ({
  type: actions.CLEAR_STATE
});
