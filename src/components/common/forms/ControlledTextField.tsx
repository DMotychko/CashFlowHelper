import React, { useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import type { TextFieldProps } from '@mui/material/TextField';
import type { ControllerProps } from 'react-hook-form';
import type { ControlledFunctionComponent } from '../../../types/components/forms';

type Props = Omit<TextFieldProps, 'inputRef' | 'error' | 'helperText' | 'name' | 'value' | 'onBlur' | 'onChange'>;

const ControlledTextField: ControlledFunctionComponent<Props> = ({ name, control, rules, shouldUnregister, defaultValue, ...fieldProps }) => {
  const renderField = useCallback<ControllerProps<(typeof control)['_formValues']>['render']>(
    ({ field: { ref, ...field }, fieldState: { error } }) => (
      <TextField {...field} variant="outlined" {...fieldProps} inputRef={ref} error={!!error} helperText={error?.message ?? ' '} />
    ),
    [fieldProps]
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={renderField as never}
    />
  );
};

export default ControlledTextField;
