import { FormValues } from '../types/form';

enum ValuesActions {
  SET_VALUES = 'setValues',
}

const setValues = (values: FormValues) => ({
  type: ValuesActions.SET_VALUES,
  payload: values,
});

export { ValuesActions, setValues };
