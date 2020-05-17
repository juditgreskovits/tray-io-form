import { FormFieldType, FormValue } from './form';
import { SyntheticEvent, ReactNode } from 'react';

export interface InputProps {
  id: string;
  type?: FormFieldType;
  label: string;
  required: boolean;
  onChange: (event: SyntheticEvent) => void;
  value: string | boolean;
  error: string | null;
}

export interface FormFields {
  [id: string]: {
    value: FormValue;
    error: string | null;
  };
}

export interface RenderForm {
  ({
    onChange,
    onSubmit,
    fieldsState,
  }: {
    onChange: (event: SyntheticEvent) => void;
    onSubmit: (event: SyntheticEvent) => void;
    fieldsState: FormFields;
  }): ReactNode | ReactNode[];
}
