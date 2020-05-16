import React from 'react';
import styled from 'styled-components';

interface PageTitleProps {
  title: string;
  active: boolean;
}

const StyledContainer = styled.div<{ active: boolean }>`
  width: 100%;
  text-align: center;
  padding: 3rem 0 2rem;
  font-weight: ${({ active }) => (active ? 'bold' : 'regular')};
  background-color: ${({ theme, active }) => (active ? theme.colours.light : theme.colours.dark)};
  border-radius: ${({ theme }) => `${theme.border.radius} ${theme.border.radius} 0 0`};
`;

const StyledTitle = styled.h2<{ active: boolean }>`
  font-size: 1.8rem;
  ${({ theme, active }) =>
    active
      ? `
    color: ${theme.colours.dark};
  `
      : `
  color: ${theme.colours.light};
  `}
`;

const PageTitle = ({ title, active }: PageTitleProps) => (
  <StyledContainer active={active}>
    <StyledTitle active={active}>{title}</StyledTitle>
  </StyledContainer>
);

export default PageTitle;
