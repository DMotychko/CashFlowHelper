import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import apartmentsReducer, { addApartment, removeApartment } from './apartmentsSlice';
import bigBusinessesReducer, { addBigBusiness } from './bigBusinessesSlice';
import childrenReducer, { addChild } from './childrenSlice';
import dreamReducer, { setDream } from './dreamSlice';
import expensesReducer, { addExpense, removeExpense } from './expensesSlice';
import isFiredReducer, { toggleIsFired } from './isFiredSlice';
import jobReducer, { setJob } from './jobSlice';
import loansReducer, { addLoan, removeLoan } from './loansSlice';
import smallBusinessesReducer, { addSmallBusiness, expandSmallBusiness } from './smallBusinessesSlice';
import userNameReducer, { setUserName } from './userNameSlice';
import { persistStoreKey, persistStorePrefix } from '../common/config';
import actions from './actions/actions';
import type { AnyAction, PreloadedState, Reducer } from '@reduxjs/toolkit';
import type { PersistConfig } from 'redux-persist';

const persistConfig: PersistConfig<StoreState> = {
  key: persistStoreKey,
  storage,
  stateReconciler: hardSet
};

const appReducer = combineReducers({
  userName: userNameReducer,
  isFired: isFiredReducer,
  job: jobReducer,
  children: childrenReducer,
  expenses: expensesReducer,
  loans: loansReducer,
  apartments: apartmentsReducer,
  smallBusinesses: smallBusinessesReducer,
  bigBusinesses: bigBusinessesReducer,
  dream: dreamReducer
});

const rootReducer: Reducer<StoreState, AnyAction> = (state, action) => {
  switch (action.type) {
    case actions.CLEAR_STATE:
      storage.removeItem(`${persistStorePrefix}:${persistStoreKey}`);
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type StoreState = ReturnType<typeof appReducer>;

export const setupStore = (preloadedState?: PreloadedState<StoreState>) =>
  configureStore({
    reducer: persistedReducer,
    preloadedState,
    devTools: {
      actionCreators: {
        setUserName,
        toggleIsFired,
        setJob,
        addChild,
        addExpense,
        removeExpense,
        addLoan,
        removeLoan,
        addApartment,
        removeApartment,
        addSmallBusiness,
        expandSmallBusiness,
        addBigBusiness,
        setDream
      }
    }
  });

type AppState = ReturnType<typeof setupStore>;
export type Dispatch = AppState['dispatch'];
