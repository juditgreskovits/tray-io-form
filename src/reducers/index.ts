import { combineReducers } from 'redux';
import form from './form';
import progress from './progress';
import values from './values';

const reducers = combineReducers({
  form,
  progress,
  values,
});

export default reducers;
