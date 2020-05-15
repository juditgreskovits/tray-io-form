import React, { Component, SyntheticEvent, ReactNode } from 'react';
import { FormValues, FormFieldType, FormField } from '../types/form';

interface InputProps extends FormField {
  onChange: (event: SyntheticEvent) => void;
  value: string | boolean;
}

class Input extends Component<InputProps> {
  getField = () => {
    const { id, type, required, value, placeholder, defaultValue, onChange } = this.props;
    switch (type) {
      case FormFieldType.INPUT:
        return <input name={id} required={required} value={value.toString()} type="text" onChange={onChange} />;
      case FormFieldType.PASSWORD:
        return <input name={id} required={required} value={value.toString()} type="password" onChange={onChange} />;
      case FormFieldType.CHECKBOX:
        return <input name={id} required={required} value={value.toString()} type="checkbox" onChange={onChange} />;
    }
  };

  render() {
    const { id, label } = this.props;
    const fieldLabel = <label htmlFor={id}>{label}</label>;
    const field = this.getField();

    return (
      <div>
        {fieldLabel}
        {field}
      </div>
    );
  }
}

interface SubmitProps {
  label: string;
}

const Submit = ({ label }: SubmitProps) => <input type="submit" value={label} />;

interface FormMessageProps {
  message: string;
}

const FormMessage = ({ message }: FormMessageProps) => <p>{message}</p>;

interface FormPageProps {
  onSubmit: (values: FormValues) => void;
  fields: FormField[];
}

interface FormPageState {
  values: FormValues;
}

class FormPage extends Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);

    const { fields } = this.props;
    const initialValues: FormValues = {};
    const values = fields.reduce((values, field) => {
      values[field.id] = field.defaultValue;
      return values;
    }, initialValues);

    this.state = {
      values,
    };
  }

  handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const values = {
      ...this.state.values,
      [target.name]: target.value,
    };
    this.setState({
      values,
    });
  };

  handleSubmit = (event: SyntheticEvent) => {
    // validate
    // if valid, call onSubmit prop w values
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.values);
  };

  render() {
    const { fields } = this.props;
    const formFields = fields.map(field => {
      const value = this.state.values[field.id];
      console.log('value = ', value);
      return <Input key={field.id} onChange={this.handleChange} value={value} {...field} />;
    });
    return (
      <form onSubmit={this.handleSubmit}>
        {formFields}
        <Submit label="Submit" />
      </form>
    );
  }
}

export { FormPage, Input, Submit, FormMessage };
