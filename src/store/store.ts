import { configureStore } from "@reduxjs/toolkit";
import apartmentsReducer from "./apartmentsSlice";
import bigBusinessesReducer from "./bigBusinessesSlice";
import childrenReducer from "./childrenSlice";
import expensesReducer from "./expensesSlice";
import isFiredReducer from "./isFiredSlice";
import jobReducer from "./jobSlice";
import loansReducer from "./loansSlice";
import smallBusinessesReducer from "./smallBusinessesSlice";
import userNameReducer from "./userNameSlice";

const store = configureStore({
    reducer: {
        userName: userNameReducer,
        isFired: isFiredReducer,
        job: jobReducer,
        children: childrenReducer,
        expenses: expensesReducer,
        loans: loansReducer,
        apartments: apartmentsReducer,
        smallBusinesses: smallBusinessesReducer,
        bigBusinesses: bigBusinessesReducer
    }
});

export type StoreState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;