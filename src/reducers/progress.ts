import { ProgressActions, Action } from '../actions';

const initialState: number = 1;

function progress(state: number = initialState, action: Action<ProgressActions>) {
  switch (action.type) {
    case ProgressActions.NEXT_PAGE:
      return state + 1;
    default:
      return state;
  }
}

export default progress;
