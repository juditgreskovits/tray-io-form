import React from 'react';
import { connect } from 'react-redux';

import { PageTitle, PageHeader } from '../components';

import { FormDescriptor } from '../types/form';
import { State } from '../types/state';

interface ProgressContainerProps {
  form: FormDescriptor;
  progress: number;
}

const ProgressContainer = ({ form, progress }: ProgressContainerProps) => {
  const titles =
    form &&
    form.map(({ title }, index) => (
      <PageTitle key={`form-page-title-${index}`} active={index === progress} title={title} />
    ));

  return <PageHeader>{titles}</PageHeader>;
};

const mapStateToProps = (state: State) => ({
  form: state.form,
  progress: state.progress,
});

export default connect(mapStateToProps)(ProgressContainer);
export { ProgressContainer };
