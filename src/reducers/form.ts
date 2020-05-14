import { FormActions, Action } from '../actions';

import { FormValue, FormFieldType, Form } from '../types/form';

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
