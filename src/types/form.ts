export type FormValue = string | boolean;

export type FormFieldValidation = (value: FormValue) => boolean;

export enum FormFieldType {
  INPUT = 'input',
  CHECKBOX = 'checkbox',
}

export interface FormField {
  id: string;
  type: FormFieldType;
  label: string;
  required: boolean;
  password: boolean;
  validation?: FormFieldValidation;
  placeholder?: FormValue;
  defaultValue?: FormValue;
}

export type FormPage = {
  title: string;
  fields?: FormField[];
};

export type Form = FormPage[];
