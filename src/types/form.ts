export type FormValue = string | boolean;

export interface FormValues {
  [id: string]: string | boolean;
}

export type FormFieldValidation = (value: FormValue) => boolean;

export enum FormFieldType {
  INPUT = 'input',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox',
}

export interface FormField {
  id: string;
  type: FormFieldType;
  label: string;
  required: boolean;
  validation?: FormFieldValidation;
  placeholder?: FormValue;
  defaultValue: FormValue;
}

export type FormPage = {
  title: string;
  fields?: FormField[];
  message?: string;
};

export type Form = FormPage[];
