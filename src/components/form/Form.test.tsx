import React from 'react';
import { shallow } from 'enzyme';
import Form, { FormState } from './Form';
import { FormFieldType } from '../../types/form';

describe('Form', () => {
  const onSubmit = jest.fn();
  const renderForm = jest.fn();
  const validation = jest.fn(() => null);
  const validationWithError = jest.fn(() => 'Error message');
  const props = {
    fields: [
      {
        id: 'input',
        type: FormFieldType.TEXT,
        label: 'Input label',
        required: true,
        defaultValue: '',
        validation: validationWithError,
      },
      {
        id: 'checkbox',
        type: FormFieldType.CHECKBOX,
        label: 'Checkbox label',
        required: true,
        defaultValue: true,
        validation,
      },
      {
        id: 'novalidation',
        type: FormFieldType.CHECKBOX,
        label: 'Checkbox label',
        required: false,
        defaultValue: false,
      },
    ],
    onSubmit,
    renderForm,
  };

  const validProps = {
    ...props,
    fields: [
      {
        ...props.fields[0],
        validation,
      },
      { ...props.fields[1] },
      { ...props.fields[2] },
    ],
  };

  let wrapper: any;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<Form {...props} />);
  });

  describe('constructor', () => {
    it('stores the initial values of inputs in the state', () => {
      expect((wrapper.state() as FormState).fields).toEqual({
        input: { value: '', error: null },
        checkbox: { value: true, error: null },
        novalidation: { value: false, error: null },
      });
    });
    it('initially, attempted is false', () => {
      expect((wrapper.state() as FormState).attempted).toBe(false);
    });
  });

  describe('validateField', () => {
    it("calls the field's validation function if it has one and returns the result", () => {
      expect(wrapper.instance().validateField('input', 'Inputted text')).toBe('Error message');
      expect(validationWithError).toHaveBeenCalledWith('Inputted text');
      expect(wrapper.instance().validateField('checkbox', false)).toBe(null);
      expect(validation).toHaveBeenCalledWith(false);
    });
    it('returns null if no validation function exists', () => {
      expect(wrapper.instance().validateField('novalidation', 'false')).toBe(null);
    });
  });

  describe('validateForm', () => {
    it('returns an object containing errors and whether the form is valid', () => {
      expect(wrapper.instance().validateForm()).toEqual({
        valid: false,
        errorFields: {
          input: {
            value: '',
            error: 'Error message',
          },
        },
      });
      expect(validationWithError).toHaveBeenCalledWith('');
      expect(validation).toHaveBeenCalledWith(true);
    });
    it('...also for multiple errors', () => {
      const p = {
        ...props,
        fields: [
          {
            ...props.fields[0],
          },
          { ...props.fields[1] },
          { ...props.fields[2], validation: validationWithError },
        ],
      };
      const w = shallow(<Form {...p} />);
      expect((w.instance() as Form).validateForm()).toEqual({
        valid: false,
        errorFields: {
          input: {
            value: '',
            error: 'Error message',
          },
          novalidation: {
            value: false,
            error: 'Error message',
          },
        },
      });
      expect(validationWithError).toHaveBeenCalledTimes(2);
    });
    it('returns valid when the form is valid', () => {
      const w = shallow(<Form {...validProps} />);
      expect((w.instance() as Form).validateForm()).toEqual({
        valid: true,
        errorFields: {},
      });
    });
  });

  describe('handleChange', () => {
    const event = {
      target: {
        name: 'input',
        value: 'Inputted text',
      },
    };
    it('updates the state with the new value of the input', () => {
      wrapper.instance().handleChange(event);
      expect((wrapper.state() as FormState).fields).toEqual({
        input: { value: 'Inputted text', error: null },
        checkbox: { value: true, error: null },
        novalidation: { value: false, error: null },
      });
    });
    it('for a checkbox component, it uses the checked property of the event', () => {
      const e = {
        target: {
          name: 'checkbox',
          checked: false,
          type: 'checkbox',
        },
      };
      wrapper.instance().handleChange(e);
      expect((wrapper.state() as FormState).fields).toEqual({
        input: { value: '', error: null },
        checkbox: { value: false, error: null },
        novalidation: { value: false, error: null },
      });
    });
    it('if submission had not been attempted, it will not validate', () => {
      const validateFieldSpy = jest.spyOn(wrapper.instance(), 'validateField');
      wrapper.instance().handleChange(event);
      expect(validateFieldSpy).not.toHaveBeenCalled();
    });
    it('if submission had been attempted, it will also validate', () => {
      const validateFieldSpy = jest.spyOn(wrapper.instance(), 'validateField');
      wrapper.setState({ attepted: true });
      wrapper.instance().handleChange(event);
      expect(validateFieldSpy).not.toHaveBeenCalledWith('input', 'Inputted text');
    });
  });

  describe('handleSubmit', () => {
    const event = { preventDefault: () => {} };
    it('validates the form and updates the state with errors when not valid', () => {
      const validateFormSpy = jest.spyOn(wrapper.instance(), 'validateForm');
      wrapper.instance().handleSubmit(event);
      expect(validateFormSpy).toHaveBeenCalled();
      expect((wrapper.state() as FormState).fields).toEqual({
        input: { value: '', error: 'Error message' },
        checkbox: { value: true, error: null },
        novalidation: { value: false, error: null },
      });
    });
    it('validates the form and calls the onSubmit prop when the form is valid', () => {
      const w = shallow(<Form {...validProps} />);
      (w.instance() as Form).handleSubmit(event);
      expect(onSubmit).toHaveBeenCalledWith({
        input: '',
        checkbox: true,
        novalidation: false,
      });
    });
  });

  describe('render', () => {
    it('makes use of the render prop', () => {
      wrapper.instance().render();
      expect(renderForm).toHaveBeenCalledWith({
        onChange: wrapper.instance().handleChange,
        onSubmit: wrapper.instance().handleSubmit,
        fieldsState: wrapper.instance().state.fields,
      });
    });
  });
});
