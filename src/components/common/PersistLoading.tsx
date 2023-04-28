import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import '../../styles/components/common/persistLoading.scss';

const PersistLoading: React.FunctionComponent = () => {
  return (
    <Container className="ch-persist-loading">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PersistLoading;
