import Dialog from '@mui/material/Dialog';
import { styled, css } from '@mui/material/styles';

const DialogForm = styled(Dialog)(({ theme }) =>
  css({
    '.MuiDialogContent-root': {
      paddingTop: theme.spacing(1)
    }
  })
);

export default DialogForm;
