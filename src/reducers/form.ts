import { FormActions, Action } from '../actions';

type FormValue = string | boolean;

type FormFieldValidation = (value: FormValue) => boolean;

enum FormFieldType {
  INPUT = 'input',
  CHECKBOX = 'checkbox',
}

interface FormField {
  id: string;
  type: FormFieldType;
  label: string;
  required: boolean;
  password: boolean;
  validation?: FormFieldValidation;
  placeholder?: FormValue;
  defaultValue?: FormValue;
}

type FormPage = {
  title: string;
  fields?: FormField[];
};

type Form = null | FormPage[];

const requiredValidation = (value: FormValue) => Boolean(typeof value === 'string' && value.length > 0);

const initialState: Form = [
  {
    title: 'User',
    fields: [
      {
        id: 'name',
        type: FormFieldType.INPUT,
        label: 'Your name',
        required: true,
        password: false,
        validation: requiredValidation,
      },
      {
        id: 'role',
        type: FormFieldType.INPUT,
        label: 'Your desired role',
        required: false,
        password: false,
      },
      {
        id: 'email',
        type: FormFieldType.INPUT,
        label: 'Your email',
        required: true,
        password: false,
        validation: requiredValidation,
      },
      {
        id: 'password',
        type: FormFieldType.INPUT,
        label: 'Your password',
        required: true,
        password: true,
        validation: requiredValidation,
      },
    ],
  },
  {
    title: 'Privacy',
    fields: [
      {
        id: 'tray-io-product-updates',
        type: FormFieldType.CHECKBOX,
        label: 'Receive updates about the Tray.io product by email',
        required: false,
        password: false,
        defaultValue: true,
      },
      {
        id: 'other-product-updates',
        type: FormFieldType.CHECKBOX,
        label: 'Receive communication by email about other products created by the Tray.io team',
        required: false,
        password: false,
      },
    ],
  },
  {
    title: 'Done',
  },
];

function form(state: Form = initialState, action: Action<FormActions, Form>) {
  switch (action.type) {
    case FormActions.SET_FORM:
      return action.payload;
    default:
      return state;
  }
}

export default form;
