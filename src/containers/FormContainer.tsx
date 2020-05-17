import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setValues, nextPage } from '../actions';
import { TextInput, CheckboxInput, Submit, Message, Layout, Form } from '../components';

import { FormDescriptor, FormValues, FormFieldType } from '../types/form';
import { RenderForm } from '../types/components';
import { State } from '../types/state';

interface FormContainerProps {
  form: FormDescriptor;
  progress: number;
  values: FormValues;
  pageIndex: number;
  setValues: (values: FormValues) => void;
  nextPage: () => void;
}

class FormContainer extends Component<FormContainerProps> {
  componentDidUpdate() {
    const { form, progress, pageIndex } = this.props;
    if (form.length - 1 === progress && progress === pageIndex) {
      this.logValues();
    }
  }

  logValues() {
    const { values } = this.props;
    const log = JSON.stringify(values, null, 2);
    console.log(log);
  }

  handleSubmit = (values: FormValues) => {
    const { setValues, nextPage } = this.props;
    setValues(values);
    nextPage();
  };

  renderForm: RenderForm = ({ onChange, onSubmit, fieldsState }) => {
    const { form, pageIndex } = this.props;
    const { fields, submit } = form[pageIndex];

    const formFields =
      fields &&
      fields.map(field => {
        const { id, type, label, required } = field;
        const { value, error } = fieldsState[id];
        const InputComponent = type === FormFieldType.CHECKBOX ? CheckboxInput : TextInput;
        return (
          <InputComponent
            key={id}
            id={id}
            type={type}
            label={label}
            required={required}
            value={value}
            error={error}
            onChange={onChange}
          />
        );
      });

    return (
      <form onSubmit={onSubmit} noValidate={true}>
        {formFields}
        {submit && <Submit label={submit.label} />}
      </form>
    );
  };

  render() {
    const { form, progress, pageIndex } = this.props;

    if (progress === pageIndex && form && form.length && pageIndex < form.length) {
      const { fields, message } = form[pageIndex];
      const formMessage = message && <Message message={message} />;
      const formPage = fields && (
        <Form fields={fields} renderForm={this.renderForm} onSubmit={this.handleSubmit} />
      );

      return (
        <Layout>
          {formMessage}
          {formPage}
        </Layout>
      );
    }
    return null;
  }
}

const mapStateToProps = (state: State) => ({
  form: state.form,
  progress: state.progress,
  values: state.values,
});

const mapDispatchToProps = {
  setValues,
  nextPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
export { FormContainer };
