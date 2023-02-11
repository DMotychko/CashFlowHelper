import { selectAllApartments } from './apartmentsSlice';
import type { StoreState } from './store';
import type { Business } from '../types';
import { selectAllSmallBusinesses } from './smallBusinessesSlice';
import { selectAllBigBusinesses } from './bigBusinessesSlice';
import { sumBy } from 'lodash';
import { selectAllExpenses } from './expensesSlice';
import { selectChildrenExpense } from './childrenSlice';

export const selectUserIncome = (state: StoreState) => {
  const incomeUnits: Business[] = [
    ...selectAllApartments(state.apartments),
    ...selectAllSmallBusinesses(state.smallBusinesses),
    ...selectAllBigBusinesses(state.bigBusinesses)
  ];
  const expenses = selectAllExpenses(state.expenses);
  const jobIncome = state.isFired ? 0 : state.job.income;

  return (
    sumBy(incomeUnits, (unit) => unit.income) + jobIncome - sumBy(expenses, (expense) => expense.outcome) - selectChildrenExpense(state.children)
  );
};
