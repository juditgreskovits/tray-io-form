// tmp

import React, { ReactNode } from 'react';

interface PageTitleProps {
  children: string;
  active: boolean;
}

const PageTitle = ({ children, active }: PageTitleProps) => (
  <div>
    <h3>{`${active ? '<<' : '<'} ${children} ${active ? '>>' : '>'}`}</h3>
  </div>
);

interface ProgressBarProps {
  children: null | ReactNode[];
}

const ProgressBar = ({ children }: ProgressBarProps) => <div>{children}</div>;

export { PageTitle, ProgressBar };
