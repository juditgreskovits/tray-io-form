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

export const passwordValidation = (value: FormValue) => {
  const error = requiredValidation(value);
  return error
    ? error
    : string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{9,}/)
        .isValidSync(value)
    ? null
    : 'Please enter a password containing a number, an upper case and a lower case letter';
};
