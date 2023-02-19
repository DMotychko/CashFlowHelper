import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import '../styles/pages/homePage.scss';

const HomePage: React.FunctionComponent = () => {
  return (
    <Container className="ch-home-page">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className="grid-fields">
        <Grid item xs={4} sm={6} md={6}>
          <Stack spacing={2} className="stack-fields">
            <Typography variant="h3" gutterBottom>
              Вітаємо!
            </Typography>
            <TextField label="Введіть ім'я" variant="outlined" className="field" />
            <Autocomplete disablePortal options={[]} className="field" renderInput={(params) => <TextField {...params} label="Мрія" />} />
            <Autocomplete disablePortal options={[]} className="field" renderInput={(params) => <TextField {...params} label="Професія" />} />
            <Button variant="contained" size="large">
              Старт
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
