import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

export type ControlledFunctionComponent<Props> = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  props: Props & Omit<ControllerProps<TFieldValues, TName>, 'render' | 'control'> & Required<Pick<ControllerProps<TFieldValues, TName>, 'control'>>
) => JSX.Element;
