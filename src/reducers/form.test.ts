import { FormActions } from '../actions';
import form from './form';

describe('Form reducer', () => {
  it('assigns form descriptor data to the state', () => {
    const formData = [{ title: 'First page' }, { title: 'Second page' }];
    const action = {
      type: FormActions.SET_FORM,
      payload: formData,
    };

    expect(form(null, action)).toEqual(formData);
  });
});
