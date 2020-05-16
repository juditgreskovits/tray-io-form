import React from 'react';
import { shallow } from 'enzyme';
import { PageTitle, PageHeader } from '../components';
import { ProgressContainer } from './ProgressContainer';

describe('ProgressContainer', () => {
  const props = {
    form: [{ title: 'First title' }, { title: 'Second title' }, { title: 'Third title' }],
    progress: 0,
  };
  const wrapper = shallow(<ProgressContainer {...props} />);

  it('renders page titles for each page of the form data prop', () => {
    expect(wrapper.find(PageTitle)).toHaveLength(3);
  });

  it('renders a container header element for the titles', () => {
    expect(wrapper.find(PageHeader)).toHaveLength(1);
  });

  it('assigns the active property to the correct title when progress is 0', () => {
    expect(wrapper.find(PageTitle).at(0).prop('active')).toBe(true);
    expect(wrapper.find(PageTitle).at(1).prop('active')).toBe(false);
    expect(wrapper.find(PageTitle).at(2).prop('active')).toBe(false);
  });

  it('assigns the active property to the correct title', () => {
    const p = {
      ...props,
      progress: 1,
    };
    const w = shallow(<ProgressContainer {...p} />);
    expect(w.find(PageTitle).at(0).prop('active')).toBe(false);
    expect(w.find(PageTitle).at(1).prop('active')).toBe(true);
    expect(w.find(PageTitle).at(2).prop('active')).toBe(false);
  });

  it('assigns the active property to the correct title', () => {
    const p = {
      ...props,
      progress: 2,
    };
    const w = shallow(<ProgressContainer {...p} />);
    expect(w.find(PageTitle).at(0).prop('active')).toBe(false);
    expect(w.find(PageTitle).at(1).prop('active')).toBe(false);
    expect(w.find(PageTitle).at(2).prop('active')).toBe(true);
  });

  it('works for more than three titles as well', () => {
    const p = {
      form: [
        { title: 'First title' },
        { title: 'Second title' },
        { title: 'Third title' },
        { title: 'Fourth title' },
        { title: 'Fifth title' },
      ],
      progress: 2,
    };
    const w = shallow(<ProgressContainer {...p} />);
    expect(w.find(PageTitle)).toHaveLength(5);
    expect(w.find(PageTitle).at(0).prop('active')).toBe(false);
    expect(w.find(PageTitle).at(1).prop('active')).toBe(false);
    expect(w.find(PageTitle).at(2).prop('active')).toBe(true);
    expect(w.find(PageTitle).at(3).prop('active')).toBe(false);
    expect(w.find(PageTitle).at(4).prop('active')).toBe(false);
  });
});
