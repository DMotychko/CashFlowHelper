import React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useSelector } from '../../store/hooks';
import { selectUserIncome } from '../../store/selectors';
import { formatMoney } from '../../helpers/common';

import '../../styles/components/mainPage/incomeSection.scss';

const IncomeSection: React.FunctionComponent = () => {
    const income = useSelector(selectUserIncome);

    return (
        <Paper className='ch-income-section' elevation={4} square>
            <Container className='container'> 
                <Grid className='grid-container' container columns={4}>
                    <Grid item xs={2}>
                        <Typography className='income-title' variant='h5' component='span'>Прибуток</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography className='income-value' variant='h5' component='span'>{formatMoney(income)}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default IncomeSection;