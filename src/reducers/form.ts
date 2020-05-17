import { requiredValidation, emailValidation, passwordValidation } from '../utils/validations';
import { FormFieldType, FormDescriptor } from '../types/form';

const initialState: FormDescriptor = [
  {
    title: 'User',
    fields: [
      {
        id: 'name',
        type: FormFieldType.TEXT,
        label: 'Your name',
        required: true,
        validation: requiredValidation,
        defaultValue: '',
      },
      {
        id: 'role',
        type: FormFieldType.TEXT,
        label: 'Your desired role',
        required: false,
        defaultValue: '',
      },
      {
        id: 'email',
        type: FormFieldType.TEXT,
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
    submit: {
      label: 'Next',
    },
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
    submit: {
      label: 'Submit',
    },
  },
  {
    title: 'Done',
    message: 'Please verify your email address, you should have received an email from us already!',
  },
];

function form(state: FormDescriptor = initialState) {
  return state;
}

export default form;
