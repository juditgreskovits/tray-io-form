import { combineReducers } from 'redux';
import progress from './progress';
import values from './values';

const reducers = combineReducers({
  progress,
  values,
});

export default reducers;
