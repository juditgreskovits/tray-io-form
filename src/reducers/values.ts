import { ValuesActions, Action } from '../actions';

interface Values {
  [key: string]: string | boolean;
}

const initialState: Values = {};

function values(state: Values = initialState, action: Action<ValuesActions, Values>) {
  switch (action.type) {
    case ValuesActions.SET_VALUES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default values;
