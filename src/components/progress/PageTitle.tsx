import React from 'react';
import styled from 'styled-components';

interface PageTitleProps {
  title: string;
  active: boolean;
}

const StyledContainer = styled.div`
  display: flex;
`;

const StyledTitle = styled.h2<{ active: boolean }>`
  ${({ active }) => active && 'text-decoration: underline;'}
`;

const PageTitle = ({ title, active }: PageTitleProps) => (
  <StyledContainer>
    <StyledTitle active={active}>{title}</StyledTitle>
  </StyledContainer>
);

export default PageTitle;
