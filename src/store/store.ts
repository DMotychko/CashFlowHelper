import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit";
import apartmentsReducer from "./apartmentsSlice";
import bigBusinessesReducer from "./bigBusinessesSlice";
import childrenReducer from "./childrenSlice";
import expensesReducer from "./expensesSlice";
import isFiredReducer from "./isFiredSlice";
import jobReducer from "./jobSlice";
import loansReducer from "./loansSlice";
import smallBusinessesReducer from "./smallBusinessesSlice";
import userNameReducer from "./userNameSlice";

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

export const setupStore = (preloadedState?: PreloadedState<StoreState>) => configureStore({
    reducer: reducer,
    preloadedState
});

type AppState = ReturnType<typeof setupStore>;
export type Dispatch = AppState['dispatch']; 