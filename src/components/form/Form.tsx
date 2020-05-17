import { Component, SyntheticEvent } from 'react';
import { FormValues, FormValue, FormField, FormFieldType } from '../../types/form';
import { RenderForm, FormFields } from '../../types/components';

interface FormPageProps {
  onSubmit: (values: FormValues) => void;
  fields: FormField[];
  renderForm: RenderForm;
}

interface FormState {
  fields: FormFields;
  attempted: boolean;
}

class Form extends Component<FormPageProps, FormState> {
  constructor(props: FormPageProps) {
    super(props);

    const { fields } = this.props;
    const initialFields = fields.reduce((initialFields, field) => {
      initialFields[field.id] = {
        value: field.defaultValue,
        error: null,
      };
      return initialFields;
    }, {} as FormFields);

    this.state = {
      fields: initialFields,
      attempted: false,
    };
  }

  handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const value = target.type === FormFieldType.CHECKBOX ? target.checked : target.value;
    const id = target.name;
    const { attempted } = this.state;
    const error = attempted ? this.validateField(id, value) : null;
    const fields = {
      ...this.state.fields,
      [id]: { value, error },
    };
    this.setState({
      fields,
    });
  };

  handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const { valid, errorFields } = this.validateForm();

    if (valid) {
      const { onSubmit } = this.props;
      const values = Object.entries(this.state.fields).reduce((values, [id, { value }]) => {
        values[id] = value;
        return values;
      }, {} as FormValues);
      onSubmit(values);
    } else {
      this.setState({
        fields: {
          ...this.state.fields,
          ...errorFields,
        },
        attempted: true,
      });
    }
  };

  validateField(id: string, value: FormValue) {
    const { fields } = this.props;
    const field = fields.find(field => field.id === id);
    return field && field.validation ? field.validation(value) : null;
  }

  validateForm() {
    const { fields } = this.props;
    return fields.reduce(
      (result, { id, validation }) => {
        const { value } = this.state.fields[id];
        const e = validation ? validation(value) : null;
        if (e) {
          result.errorFields[id] = {
            value,
            error: e,
          };
          result.valid = false;
        }
        return result;
      },
      { errorFields: {} as FormFields, valid: true }
    );
  }

  render() {
    const { renderForm } = this.props;

    return renderForm({
      onChange: this.handleChange,
      onSubmit: this.handleSubmit,
      fieldsState: this.state.fields,
    });
  }
}

export default Form;
