import { FormActions, Action } from '../actions';

import { FormValue, FormFieldType, Form } from '../types/form';

const requiredValidation = (value: FormValue) =>
  typeof value === 'string' && value.length > 0 ? 'Meow' : 'This is a required field';

const initialState: Form = [
  {
    title: 'User',
    fields: [
      {
        id: 'name',
        type: FormFieldType.INPUT,
        label: 'Your name',
        required: true,
        validation: requiredValidation,
        defaultValue: '',
      },
      {
        id: 'role',
        type: FormFieldType.INPUT,
        label: 'Your desired role',
        required: false,
        defaultValue: '',
      },
      {
        id: 'email',
        type: FormFieldType.INPUT,
        label: 'Your email',
        required: true,
        validation: requiredValidation,
        defaultValue: '',
      },
      {
        id: 'password',
        type: FormFieldType.PASSWORD,
        label: 'Your password',
        required: true,
        validation: requiredValidation,
        defaultValue: '',
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
        defaultValue: true,
      },
      {
        id: 'other-product-updates',
        type: FormFieldType.CHECKBOX,
        label: 'Receive communication by email about other products created by the Tray.io team',
        required: false,
        defaultValue: false,
      },
    ],
  },
  {
    title: 'Done',
    message: 'Please verify your email address, you should have received an email from us already!',
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
