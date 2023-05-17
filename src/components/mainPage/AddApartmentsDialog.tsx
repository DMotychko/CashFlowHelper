import React, { useCallback, useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DialogForm from '../common/dialogs/DialogForm';
import type { DialogComponent } from '../../types/modals/modalSpace';

const AddApartmentsDialog: DialogComponent<never> = ({ removeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onModalClose = useCallback(() => setIsModalOpen(false), []);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <DialogForm
        open={isModalOpen}
        onClose={onModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        fullScreen={fullScreen}
        TransitionProps={{ onExited: removeModal }}
      >
        <DialogTitle id="alert-dialog-title">Додати квартиру</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="Повна вартість квартири" variant="outlined" />
            <TextField label="Дохід від квартири" variant="outlined" />
            <TextField label="Кредит на квартиру" variant="outlined" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onModalClose}>Відмінити</Button>
          <Button onClick={onModalClose} autoFocus>
            Додати
          </Button>
        </DialogActions>
      </DialogForm>
    </>
  );
};

export default AddApartmentsDialog;
