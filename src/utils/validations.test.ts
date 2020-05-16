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

  it('returns null when the string is a valid email', () => {
    expect(emailValidation('judit@home.q')).toBe(null);
  });
});

describe('passwordValidation', () => {
  it('returns an error message when the string is shorter than 9 characters', () => {
    expect(passwordValidation('1aB')).toBeTruthy();
    expect(passwordValidation('1aB2C348')).toBeTruthy();
  });

  it('returns an error message when the string does not contain a number, upper case and lower case letter', () => {
    expect(passwordValidation('123456789')).toBeTruthy();
    expect(passwordValidation('abcdefghi')).toBeTruthy();
    expect(passwordValidation('ABCDEFGHI')).toBeTruthy();
    expect(passwordValidation('abcABCEFG')).toBeTruthy();
    expect(passwordValidation('abc123456')).toBeTruthy();
    expect(passwordValidation('123ABCDEF')).toBeTruthy();
  });

  it('returns null when the string is as least 8 characters long, has a number, and upper case and lower case letter', () => {
    expect(passwordValidation('123abcABC')).toBe(null);
    expect(passwordValidation('Aa123Bcde')).toBe(null);
    expect(passwordValidation('abcdEfgh1')).toBe(null);
    expect(passwordValidation('abcdEfnkngh1')).toBe(null);
  });

  it('accepts special characters', () => {
    expect(passwordValidation('123abcABC*=+&')).toBe(null);
  });
});
