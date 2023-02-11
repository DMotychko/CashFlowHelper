import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import apartmentsReducer, { addApartment, removeApartment } from './apartmentsSlice';
import bigBusinessesReducer, { addBigBusiness } from './bigBusinessesSlice';
import childrenReducer, { addChild } from './childrenSlice';
import expensesReducer, { addExpense, removeExpense } from './expensesSlice';
import isFiredReducer, { toggleIsFired } from './isFiredSlice';
import jobReducer, { setJob } from './jobSlice';
import loansReducer, { addLoan, removeLoan } from './loansSlice';
import smallBusinessesReducer, { addSmallBusiness, expandSmallBusiness } from './smallBusinessesSlice';
import userNameReducer, { setUserName } from './userNameSlice';

const reducer = combineReducers({
  userName: userNameReducer,
  isFired: isFiredReducer,
  job: jobReducer,
  children: childrenReducer,
  expenses: expensesReducer,
  loans: loansReducer,
  apartments: apartmentsReducer,
  smallBusinesses: smallBusinessesReducer,
  bigBusinesses: bigBusinessesReducer
});

export type StoreState = ReturnType<typeof reducer>;

export const setupStore = (preloadedState?: PreloadedState<StoreState>) =>
  configureStore({
    reducer: reducer,
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
        addBigBusiness
      }
    }
  });

type AppState = ReturnType<typeof setupStore>;
export type Dispatch = AppState['dispatch'];
