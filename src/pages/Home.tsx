import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import '../styles/Home.scss'

function Home() {
    return (
        <div className="container">
            <Typography variant="h3" gutterBottom sx={{ marginBottom: "20px" }}>
                Вітаємо!
            </Typography>
            <TextField 
                id="outlined-basic" 
                label="Введіть ім'я" 
                variant="outlined" 
                className="field"
                sx={{marginBottom: "15px"}}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[]}
                className="field"
                renderInput={(params) => <TextField {...params} label="Мрія" />}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[]}
                className="field"
                renderInput={(params) => <TextField {...params} label="Професія" />}
            />
            <Button variant="contained" size="large">
                Старт
            </Button>
        </div>
    )
}

export default Home;