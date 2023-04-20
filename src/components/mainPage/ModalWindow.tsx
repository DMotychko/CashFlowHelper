import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';

const ModalWindow: React.FunctionComponent = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Dialog
              open={open}
              onClose={handleClose}
            >
                <Box>
                    <Stack spacing={2}>
                        <Typography variant="h6">
                            Додайте малий бізнес
                        </Typography>
                        <TextField id="outlined-basic" label="Введіть назву бізнеса" variant="outlined" />
                        <TextField id="outlined-basic" label="Введіть ціну бізнеса" variant="outlined" />
                        <TextField id="outlined-basic" label="Введіть дохід від бізнес" variant="outlined" />
                    </Stack>
                </Box>
            </Dialog>
        </>
    )
}

export default ModalWindow;