import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };

const style2 = {
    textAlign: 'center'
}

const ModalWindow: React.FunctionComponent = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Stack spacing={2} sx={style2}>
                    <Typography variant="h6">
                        Додайте малий бізнес
                    </Typography>
                    <TextField id="outlined-basic" label="Введіть назву бізнеса" variant="outlined" />
                    <TextField id="outlined-basic" label="Введіть ціну бізнеса" variant="outlined" />
                    <TextField id="outlined-basic" label="Введіть дохід від бізнес" variant="outlined" />
                </Stack>
            </Box>
            </Modal>
        </>
    )
}

export default ModalWindow;