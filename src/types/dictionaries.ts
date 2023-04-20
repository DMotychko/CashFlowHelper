import type { Dream, Job } from '.';

export type JobOption = {
  id: string;
  title: string;
};

export type DreamOption = Dream;

export type CardExpense = {
  title: string;
  outcome: number;
};

export type CardLoan = {
  title: string;
  sum: number;
  expense: CardExpense;
};

export type Card = {
  job: Job;
  childExpense: number;
  expenses: CardExpense[];
  loans?: CardLoan[];
};
