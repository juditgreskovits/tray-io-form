import React from 'react';
import styled from 'styled-components';

const StyledInputLabel = styled.label<{ required: boolean }>`
  margin-bottom: 0.6rem;
  font-size: 1.4rem;
  ${({ required, theme }) =>
    required &&
    `
    ::after {
      color: ${theme.colours.brand};
      content: '*';
    };
  `}
`;

interface LabelProps {
  label: string;
  htmlFor?: string;
  required: boolean;
}

const Label = ({ label, htmlFor, required }: LabelProps) => (
  <StyledInputLabel htmlFor={htmlFor} required={required}>
    {label}
  </StyledInputLabel>
);

export default Label;
