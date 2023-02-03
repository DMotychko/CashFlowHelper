import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Home() {
    return (
        <div>
            <h1>Вітаємо!</h1>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div>
    )
}

export default Home;