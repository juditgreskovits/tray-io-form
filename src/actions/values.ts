enum ValuesActions {
  SET_VALUES = 'setValues',
}

const setValues = () => ({
  type: ValuesActions.SET_VALUES,
});

export { ValuesActions, setValues };
