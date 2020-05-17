import React from 'react';
import { shallow } from 'enzyme';
import { Message, Layout, Form } from '../components';
import { FormContainer } from './FormContainer';
import { FormFieldType } from '../types/form';

describe('FormContainer', () => {
  const setValues = jest.fn();
  const nextPage = jest.fn();

  const props = {
    form: [
      {
        title: 'First title',
        message: 'This is a form page message',
        fields: [
          {
            id: 'input',
            type: FormFieldType.TEXT,
            label: 'Input label',
            required: true,
            defaultValue: '',
          },
          {
            id: 'checkbox',
            type: FormFieldType.CHECKBOX,
            label: 'Checkbox label',
            required: false,
            defaultValue: true,
          },
        ],
        submit: {
          label: 'Submit',
        },
      },
      { title: 'Second title' },
      { title: 'Third title' },
    ],
    progress: 0,
    values: {
      input: 'Inputted text',
      checkbox: true,
    },
    pageIndex: 0,
    setValues,
    nextPage,
  };
  const wrapper = shallow(<FormContainer {...props} />);
  const instance = wrapper.instance() as FormContainer;

  describe('render', () => {
    it('renders when its pageIndex is equal to progress', () => {
      expect(wrapper.isEmptyRender()).toBe(false);
    });
    it('does not render when its pageIndex is not equal to progress', () => {
      const p = {
        ...props,
        progress: 1,
      };
      const w = shallow(<FormContainer {...p} />);
      expect(w.isEmptyRender()).toBe(true);
    });
    it('does not render when there are no form pages', () => {
      const p = {
        ...props,
        form: [],
      };
      const w = shallow(<FormContainer {...p} />);
      expect(w.isEmptyRender()).toBe(true);
    });
    it('does not render when the pageIndex supplied exceeds the number of form pages', () => {
      const p = {
        ...props,
        pageIndex: 3,
      };
      const w = shallow(<FormContainer {...p} />);
      expect(w.isEmptyRender()).toBe(true);
    });
    it('renders a layout element to contain others', () => {
      expect(wrapper.find(Layout)).toHaveLength(1);
    });
    it('renders a message when one exists for the page in the supplied form data', () => {
      expect(wrapper.find(Message)).toHaveLength(1);
    });
    it('renders a form page when fields are defined for the page on the form data', () => {
      expect(wrapper.find(Form)).toHaveLength(1);
    });
  });
  describe('logValues', () => {
    it('console.logs the values supplied via the props', () => {
      const spy = jest.spyOn(console, 'log');
      instance.logValues();
      expect(spy).toHaveBeenCalledWith(JSON.stringify(props.values, null, 2));
    });
  });
  describe('componentDidUpdate', () => {
    it('calls logValues on the last page of the form', () => {
      const p = {
        ...props,
        pageIndex: 2,
        progress: 2,
      };
      const w = shallow(<FormContainer {...p} />);
      const spy = jest.spyOn(w.instance() as FormContainer, 'logValues');
      (w.instance() as FormContainer).componentDidUpdate();
      expect(spy).toHaveBeenCalled();
    });
    it('does not call logValues on other pages', () => {
      const p = {
        ...props,
        pageIndex: 2,
        progress: 1,
      };
      const w = shallow(<FormContainer {...p} />);
      const i = w.instance() as FormContainer;
      const spy = jest.spyOn(i, 'logValues');
      i.componentDidUpdate();
      expect(spy).not.toHaveBeenCalled();
    });
  });
  describe('handleSubmit', () => {
    it('updates the redux store with the form values using actions and requests the next page', () => {
      const values = { key: 'value' };
      instance.handleSubmit(values);
      expect(setValues).toHaveBeenCalledWith(values);
      expect(nextPage).toHaveBeenCalled();
    });
  });
});
