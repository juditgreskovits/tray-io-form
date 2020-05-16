export type FormValue = string | boolean;

export interface FormValues {
  [id: string]: string | boolean;
}

export type FormFieldValidation = (value: FormValue) => string | null;

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
  defaultValue: FormValue;
}

export type FormPage = {
  title: string;
  fields?: FormField[];
  message?: string;
  submit?: { label: string };
};

export type Form = FormPage[];
