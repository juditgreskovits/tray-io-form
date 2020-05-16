import React, { SyntheticEvent, ReactNode } from 'react';
import styled from 'styled-components';
import Label from './Label';
import { FormField } from '../../types/form';

const StyledTextInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
`;

const StyledTextInput = styled.input<{ error: string | null }>`
  padding: 0.8em 1em;
  font-size: 1.4rem;
  border: ${({ theme, error }) => (error ? `1px solid ${theme.colours.brand}` : `1px solid ${theme.colours.grey}`)};
  transition: border 0.3s ease;
  &:focus {
    outline: none;
    border: ${({ theme, error }) => (error ? `1px solid ${theme.colours.brand}` : `1px solid ${theme.colours.dark}`)};
  }
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
    <Label required={required} htmlFor={id}>
      {label}
    </Label>
    <StyledTextInput
      error={error}
      name={id}
      required={required}
      value={value.toString()}
      type={type}
      onChange={onChange}
    />
    {renderError(error)}
  </StyledTextInputContainer>
);

export default TextInput;
