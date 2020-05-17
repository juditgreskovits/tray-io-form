import React from 'react';
import styled from 'styled-components';

const StyledError = styled.small`
  position: absolute;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colours.brand};
  top: 6.4rem;
`;

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => <StyledError>{message}</StyledError>;

export default Error;
