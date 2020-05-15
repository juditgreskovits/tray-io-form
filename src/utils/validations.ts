import { string } from 'yup';
import { FormValue } from '../types/form';

export const requiredValidation = (value: FormValue) => {
  const valid = string().required().isValidSync(value);
  console.log('valid = ', valid);
  return valid ? null : 'This is a required field';
};

export const emailValidation = (value: FormValue) => {
  const error = requiredValidation(value);
  return error ? error : string().email().isValidSync(value) ? null : 'Please enter a valid email address';
};

// > 9, one number, one lower case, one upper case
export const passwordValidation = (value: FormValue) => {
  const error = requiredValidation(value);
  return error
    ? error
    : string().min(9).isValidSync(value)
    ? null
    : 'Please enter a password containing a number, an upper case and a lower case letter';
};
