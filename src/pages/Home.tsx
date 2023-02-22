import React, { useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { uniqueId } from 'lodash';
import { useDispatch } from '../store/hooks';
import { setUserName } from '../store/userNameSlice';
import { setDream } from '../store/dreamSlice';
import { setJob } from '../store/jobSlice';
import { setExpenseOnChild } from '../store/childrenSlice';
import { addLoans } from '../store/loansSlice';
import { addExpenses } from '../store/expensesSlice';
import { getCard } from '../helpers/dictionaries';
import SignInForm from '../components/homePage/SignInForm';
import type { SignInFormData } from '../types/homePage';
import type { Card, CardExpense } from '../types/dictionaries';
import type { Expense, Loan } from '../types';

import '../styles/Home.scss';

const mapCardExpenseToStateExpense = (expense: CardExpense) => ({
    ...expense,
    id: uniqueId()
});

const mapCardToStore = (card: Card) => {
    const expenses = card.expenses.map<Expense>(mapCardExpenseToStateExpense);

    const loans: Loan[] = [];
    card.loans?.forEach(loan => {
        const expense = mapCardExpenseToStateExpense(loan.expense);
        expenses.push(expense);
        loans.push({
            id: uniqueId(),
            title: loan.title,
            sum: loan.sum,
            expenseId: expense.id
        });
    });

    return {
        job: card.job,
        childExpense: card.childExpense,
        loans,
        expenses
    };
};

type Props = {
    onStart: () => void;
};

const Home: React.FunctionComponent<Props> = ({ onStart }) => {
    const dispatch = useDispatch();

    const onSignInSubmit = useCallback((signInForm: SignInFormData) => {
        const card = getCard(signInForm.job.id);
        const { job, childExpense, loans, expenses } = mapCardToStore(card);

        const actions = [
            setUserName(signInForm.userName),
            setDream(signInForm.dream),
            setJob(job),
            setExpenseOnChild(childExpense),
            addLoans(loans),
            addExpenses(expenses)
        ];
        
        actions.forEach(dispatch);

        onStart();
    }, [dispatch]);

    return (
        <Container fixed className="ch-home-page">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className="grid-fields">
                <Grid item xs={4} sm={6} md={6} >
                    <SignInForm onSubmit={onSignInSubmit} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;