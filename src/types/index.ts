export type Job = {
    title: string,
    income: number
};

export type Expense = {
    id: string,
    title: string,
    outcome: number
};

type IncomeUnit = {
    id: string,
    income: number
};

export type Business = IncomeUnit;

export type Loan = {
    id: string,
    title: string,
    sum: number,
    expenseId: string
};

export type Apartment = IncomeUnit & {
    type: string,
    loanId: string
};

export type ChildrenExpense = {
    childrenCount: number,
    expenseOnChild: number
}
