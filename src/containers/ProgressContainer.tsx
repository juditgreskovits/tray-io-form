import React from 'react';
import { connect } from 'react-redux';

import { PageTitle, PageHeader } from '../components';

import { Form } from '../types/form';
import { State } from '../types/state';

interface ProgressContainerProps {
  form: Form;
  progress: number;
}

const ProgressContainer = ({ form, progress }: ProgressContainerProps) => {
  const titles = form.map(({ title }, index) => (
    <PageTitle key={`form-page-title-${index}`} active={index === progress} title={title} />
  ));

  return <PageHeader>{titles}</PageHeader>;
};

const mapStateToProps = (state: State) => ({
  form: state.form as Form,
  progress: state.progress,
});

export default connect(mapStateToProps)(ProgressContainer);
