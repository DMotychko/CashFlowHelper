import React, { useCallback, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import type { DialogComponent } from '../../../types/modals/modalSpace';
import type { ConfirmModalProps } from '../../../types/modals/confirmModal';

const ConfirmDialog: DialogComponent<ConfirmModalProps> = ({ title, description, confirmLabel = 'Підтвердити', onConfirm, removeModal }) => {
  const [isOpen, setIsOpen] = useState(true);

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const confirm = useCallback(() => {
    onConfirm();
    close();
  }, [onConfirm, close]);

  return (
    <Dialog
      open={isOpen}
      onClose={close}
      TransitionProps={{ onExited: removeModal }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      {description && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={close}>Відмінити</Button>
        <Button onClick={confirm} autoFocus>
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
