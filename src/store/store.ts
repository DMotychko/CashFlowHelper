import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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
import modalsReducer, { openModal, closeModal } from './modalsSlice';
import { persistStoreKey } from '../common/config';
import actions from './actions/actions';
import type { AnyAction, PreloadedState, Reducer } from '@reduxjs/toolkit';
import type { PersistConfig } from 'redux-persist';

const persistStorePrefix = 'persist';

const persistConfig: PersistConfig<StoreState> = {
  key: persistStoreKey,
  version: 1,
  storage,
  blacklist: ['modals']
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
  dream: dreamReducer,
  modals: modalsReducer
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
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          ignoredActionPaths: ['payload.props']
        }
      }),
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
        setDream,
        openModal,
        closeModal
      }
    }
  });

type AppState = ReturnType<typeof setupStore>;
export type Dispatch = AppState['dispatch'];
