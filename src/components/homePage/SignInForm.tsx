import React, { useRef } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import { getDreams, getJobs } from '../../helpers/dictionaries';
import { formatMoney } from '../../helpers/common';
import type { ControllerProps } from 'react-hook-form';
import type { SignInFormData } from '../../types/homePage';
import type { DreamOption, JobOption } from '../../types/dictionaries';

import '../../styles/components/homePage/signInForm.scss';

const getDreamOptionLabel = (dream: DreamOption) => `${dream.title} - ${formatMoney(dream.price)}`;
const getJobOptionLabel = (job: JobOption) => job.title;

const renderAutocomplete = <FieldName extends 'dream' | 'job'>(
  label: string,
  options: Array<SignInFormData[FieldName]>,
  getOptionLabel: (option: SignInFormData[FieldName]) => string,
  { field: { ref, value, onChange, ...field }, fieldState: { error } }: Parameters<ControllerProps<SignInFormData, FieldName>['render']>[0]
) => {
  return (
    <Autocomplete
      disablePortal
      freeSolo={false}
      onChange={(_, data) => onChange(data)}
      value={value}
      options={options}
      getOptionLabel={getOptionLabel}
      className="field"
      renderInput={(params) => (
        <TextField {...params} {...field} inputRef={ref} label={label} error={!!error} helperText={error?.message ?? ' '} required />
      )}
    />
  );
};

type Props = {
  onSubmit: (formData: SignInFormData) => void;
};

const SignInForm: React.FunctionComponent<Props> = ({ onSubmit }) => {
  const dreamOptions = useRef(getDreams());
  const jobOptions = useRef(getJobs());

  const { control, handleSubmit } = useForm<SignInFormData>({
    defaultValues: {
      userName: ''
    }
  });

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} spacing={0} className="ch-sign-in-form">
      <Typography variant="h3" gutterBottom>
        Вітаємо!
      </Typography>
      <Controller
        name="userName"
        control={control}
        rules={{ required: "Ім'я є обов'язковим" }}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          <TextField
            {...field}
            inputRef={ref}
            label="Введіть ім'я"
            variant="outlined"
            className="field"
            error={!!error}
            helperText={error?.message ?? ' '}
            required
          />
        )}
      />
      <Controller
        name="dream"
        control={control}
        rules={{ required: "Мрія є обов'язковою" }}
        render={(renderProps) => renderAutocomplete('Мрія', dreamOptions.current, getDreamOptionLabel, renderProps)}
      />
      <Controller
        name="job"
        control={control}
        rules={{ required: "Професія є обов'язковою" }}
        render={(renderProps) => renderAutocomplete('Професія', jobOptions.current, getJobOptionLabel, renderProps)}
      />
      <Button variant="contained" size="large" type="submit">
        Старт
      </Button>
    </Stack>
  );
};

export default SignInForm;
