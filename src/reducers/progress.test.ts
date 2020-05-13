import { ProgressActions } from '../actions';
import progress from './progress';

describe('Progress reducer', () => {
  it('increments the state by one', () => {
    const action = { type: ProgressActions.NEXT_PAGE };
    expect(progress(0, action)).toEqual(1);
  });
});
