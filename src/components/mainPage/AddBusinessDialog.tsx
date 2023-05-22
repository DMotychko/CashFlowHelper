import React, { useCallback, useState } from 'react';
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { uniqueId } from 'lodash';
import { useForm } from 'react-hook-form';
import { useDispatch } from '../../store/hooks';
import { addSmallBusiness } from '../../store/smallBusinessesSlice';
import { addBigBusiness } from '../../store/bigBusinessesSlice';
import ControlledTextField from '../common/forms/ControlledTextField';
import DialogForm from '../common/dialogs/DialogForm';
import type { Business } from '../../types';
import type { DialogComponent } from '../../types/modals/modalSpace';
import type { AddBusinessModalProps } from '../../types/modals/addBusinessModal';

type BusinessForm = {
  businessPrice: string;
  businessIncome: string;
};

const AddBusinessDialog: DialogComponent<AddBusinessModalProps> = ({ removeModal, isBigBusiness }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<BusinessForm>({
    defaultValues: {
      businessPrice: '',
      businessIncome: ''
    }
  });

  const submit = useCallback(
    (form: BusinessForm) => {
      const newBusiness: Business = {
        id: uniqueId(),
        price: parseInt(form.businessPrice),
        income: parseInt(form.businessIncome)
      };

      dispatch(isBigBusiness ? addBigBusiness(newBusiness) : addSmallBusiness(newBusiness));
      closeModal();
    },
    [dispatch]
  );

  return (
    <>
      <DialogForm
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        fullScreen={fullScreen}
        TransitionProps={{ onExited: removeModal }}
      >
        <DialogTitle id="alert-dialog-title">Додати {isBigBusiness ? 'великий' : 'малий'} бізнес</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <ControlledTextField
              name="businessPrice"
              control={control}
              rules={{ required: "Ціна бізнесу є обов'язковою", min: { value: 0, message: "Ціна бізнесу не може бути від'ємною" } }}
              label="Ціна бізнесу"
              type="number"
              fullWidth
              required
            />
            <ControlledTextField
              name="businessIncome"
              control={control}
              rules={{ required: "Дохід від бізнесу є обов'язковим", min: { value: 0, message: "Дохід від бізнесу не може бути від'ємним" } }}
              label="Дохід від бізнесу"
              type="number"
              fullWidth
              required
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Відмінити</Button>
          <Button onClick={handleSubmit(submit)}>Додати</Button>
        </DialogActions>
      </DialogForm>
    </>
  );
};

export default AddBusinessDialog;
