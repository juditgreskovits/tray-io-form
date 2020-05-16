export interface Action<Type, Payload = null> {
  type: Type;
  payload?: Payload;
}

export { ProgressActions, nextPage } from './progress';
export { ValuesActions, setValues } from './values';
