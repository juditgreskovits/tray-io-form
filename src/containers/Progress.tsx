import React from 'react';
import { connect } from 'react-redux';

import { PageTitle, ProgressBar } from '../components';

import { Form } from '../types/form';
import { State } from '../types/state';

interface ProgressProps {
  form: Form;
  progress: number;
}

const Progress = ({ form, progress }: ProgressProps) => {
  const titles = form.map((formPage, index) => <PageTitle active={index === progress}>{formPage.title}</PageTitle>);

  return <ProgressBar>{titles}</ProgressBar>;
};

const mapStateToProps = (state: State) => ({
  form: state.form as Form,
  progress: 1,
});

export default connect(mapStateToProps)(Progress);
