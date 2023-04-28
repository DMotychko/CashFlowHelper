import React, { useMemo } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from '../../store/hooks';
import { selectUserName } from '../../store/userNameSlice';
import { selectIsFired } from '../../store/isFiredSlice';
import { selectJob } from '../../store/jobSlice';

import '../../styles/components/mainPage/header.scss';

type Props = {
  onLogoutClick: () => void;
};

const Header: React.FunctionComponent<Props> = ({ onLogoutClick }) => {
  const userName = useSelector(selectUserName);
  const isFired = useSelector(selectIsFired);
  const job = useSelector(selectJob);

  const jobTitle = useMemo(() => {
    if (isFired) {
      return 'Безробітний (0$)';
    }

    return `${job.title} (${job.income}$)`;
  }, [isFired, job]);

  return (
    <AppBar className="ch-header">
      <Container>
        <Toolbar disableGutters className="welcome">
          <Stack spacing={0.3} className="user">
            <Typography variant="h5">Привіт, {userName}!</Typography>
            <Typography variant="subtitle2">Твоя професія - {jobTitle}</Typography>
          </Stack>
          <Tooltip title="Вийти">
            <IconButton color="inherit" size="large" edge="end" onClick={onLogoutClick}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
