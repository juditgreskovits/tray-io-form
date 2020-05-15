import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setValues, nextPage } from '../actions';
import { FormPage, Message } from '../components';

import { Form, FormValues } from '../types/form';
import { State } from '../types/state';

interface FormContainerProps {
  form: Form;
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

  render() {
    const { form, progress, pageIndex } = this.props;
    if (progress === pageIndex) {
      const page = form[pageIndex];
      const message = page.message;
      const fields = page.fields;
      const formMessage = message && <Message message={message} />;
      const formPage = fields && <FormPage fields={fields} onSubmit={this.handleSubmit} />;

      return (
        <>
          {formMessage}
          {formPage}
        </>
      );
    }
    return null;
  }
}

const mapStateToProps = (state: State) => ({
  form: state.form as Form,
  progress: state.progress,
  values: state.values,
});

const mapDispatchToProps = {
  setValues,
  nextPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
