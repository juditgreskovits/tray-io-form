import React, { SyntheticEvent, ReactNode } from 'react';
import styled from 'styled-components';
import { FormField } from '../../types/form';

const StyledTextInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  margin-bottom: 16px;
  padding-bottom: 1rem;
`;

const StyledTextInputLabel = styled.label<{ required: boolean }>`
  margin-bottom: 4px;
  ${({ required }) =>
    required &&
    `
    ::after {
      color: red;
      content: '*';
    };
  `}
`;

const StyledTextInput = styled.input`
  padding: 8px;
`;

interface InputProps extends FormField {
  onChange: (event: SyntheticEvent) => void;
  value: string | boolean;
  error: string | null;
  renderError: (error: string | null) => ReactNode;
}

const TextInput = ({
  id,
  type,
  label,
  required,
  value,
  error,
  placeholder,
  defaultValue,
  onChange,
  renderError,
}: InputProps) => (
  <StyledTextInputContainer>
    <StyledTextInputLabel required={required} htmlFor={id}>
      {label}
    </StyledTextInputLabel>
    <StyledTextInput name={id} required={required} value={value.toString()} type={type} onChange={onChange} />
    {renderError(error)}
  </StyledTextInputContainer>
);

export default TextInput;
