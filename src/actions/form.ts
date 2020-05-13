enum FormActions {
  SET_FORM = 'setForm',
}

const setForm = () => ({
  type: FormActions.SET_FORM,
});

export { FormActions, setForm };
