import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 6rem 0 0 0;
  background-color: ${({ theme }) => theme.colours.dark};
`;

const StyledLayout = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

interface PageHeaderProps {
  children: ReactNode[];
}

const PageHeader = ({ children }: PageHeaderProps) => (
  <StyledHeader>
    <StyledLayout>{children}</StyledLayout>
  </StyledHeader>
);

export default PageHeader;
