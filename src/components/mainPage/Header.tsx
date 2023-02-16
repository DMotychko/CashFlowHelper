import React, {useMemo} from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar } from '@mui/material';
import { useSelector } from '../../store/hooks';
import type { StoreState } from '../../store/store';


import '../../styles/components/mainPage/header.scss'

const selectUserName = (state: StoreState) => state.userName;
const selectIsFired = (state: StoreState) => state.isFired;
const selectJob = (state: StoreState) => state.job;

function Header() {
    const userName = useSelector(selectUserName);
    const isFired = useSelector(selectIsFired);
    const job = useSelector(selectJob);

    const jobTitle = useMemo(() => {
        if(isFired) {
            return "Безробітний (0$)"
        } else {
            return `${job.title} (${job.income}$)`
        }
    }, [isFired]);

    return (
        <AppBar className='ch-header'>
            <Toolbar className='welcome'>
                <Stack spacing={0.3}>
                    <Typography variant="h5">
                        Привіт, {userName}!
                    </Typography>
                    <Typography variant="subtitle2">
                        Твоя професія - {jobTitle}
                    </Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Header;