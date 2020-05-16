import React from 'react';
import styled from 'styled-components';

interface SubmitProps {
  label: string;
}

const StyledSubmit = styled.input`
  margin: 1rem 0;
  padding: 0.8em 1.6em;
  background-color: ${({ theme }) => theme.colours.brand};
  color: ${({ theme }) => theme.colours.light};
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  transition: ${({ theme }) => theme.border.transition};

  &:hover,
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.border.shadow};
  }
`;

const Submit = ({ label }: SubmitProps) => <StyledSubmit type="submit" value={label} />;

export default Submit;
