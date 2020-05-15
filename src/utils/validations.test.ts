import { requiredValidation, emailValidation, passwordValidation } from './validations';

describe('requiredValidation', () => {
  it('returns an error message when the string is empty', () => {
    expect(requiredValidation('')).toBeTruthy();
  });

  it('returns null when the string is not empty', () => {
    expect(requiredValidation('string')).toBe(null);
  });
});

describe('emailValidation', () => {
  it('returns an error message when the string is  not a valid email', () => {
    expect(emailValidation('some random string')).toBeTruthy();
  });

  it('returns null when the string is not empty', () => {
    expect(emailValidation('judit@home.q')).toBe(null);
  });
});
