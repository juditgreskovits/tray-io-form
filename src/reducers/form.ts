import { requiredValidation, emailValidation, passwordValidation } from '../utils/validations';
import { FormFieldType, Form } from '../types/form';

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
        validation: emailValidation,
        defaultValue: '',
      },
      {
        id: 'password',
        type: FormFieldType.PASSWORD,
        label: 'Your password',
        required: true,
        validation: passwordValidation,
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

function form(state: Form = initialState) {
  return state;
}

export default form;
