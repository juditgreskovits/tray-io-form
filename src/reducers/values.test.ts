import { ValuesActions } from '../actions';
import values from './values';

describe('Values reducer', () => {
  it('assigns new values to the existing state', () => {
    const state = { name: 'Judit', email: 'judit@home.q' };
    const action = {
      type: ValuesActions.SET_VALUES,
      payload: { role: 'Engineer', password: 'secret' },
    };

    expect(values(state, action)).toEqual({
      name: 'Judit',
      email: 'judit@home.q',
      role: 'Engineer',
      password: 'secret',
    });
  });
  it('updates values on the existing state', () => {
    const state = { name: 'Judit', email: 'judit@home.q' };
    const action = {
      type: ValuesActions.SET_VALUES,
      payload: { name: 'Noah', email: 'noah@nap.q' },
    };

    expect(values(state, action)).toEqual({
      name: 'Noah',
      email: 'noah@nap.q',
    });
  });
});
