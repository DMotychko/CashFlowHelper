import React, { useCallback, useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { DialogComponent } from '../../types/modals/modalSpace';
import type { AddBusinessModalProps } from '../../types/modals/addBusinessModal';

const AddBusinessDialog: DialogComponent<AddBusinessModalProps> = ({ removeModal, isLargeBusiness }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onModalClose = useCallback(() => setIsModalOpen(false), []);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={onModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        fullScreen={fullScreen}
        TransitionProps={{ onExited: removeModal }}
      >
        <DialogTitle id="alert-dialog-title">Додайте {isLargeBusiness ? 'великий' : 'малий'} бізнес</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="Введіть назву бізнеса" variant="outlined" />
            <TextField label="Введіть ціну бізнеса" variant="outlined" />
            <TextField label="Введіть дохід від бізнес" variant="outlined" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onModalClose}>Відмінити</Button>
          <Button onClick={onModalClose} autoFocus>
            Додати
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddBusinessDialog;
