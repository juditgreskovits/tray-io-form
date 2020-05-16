import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import Label from './Label';
import Error from './Error';
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
  transition: ${({ theme }) => theme.border.transition};
  &:focus {
    outline: none;
    border: ${({ theme, error }) => (error ? `1px solid ${theme.colours.brand}` : `1px solid ${theme.colours.dark}`)};
    box-shadow: ${({ theme }) => theme.border.shadow};
  }
`;

interface InputProps extends FormField {
  onChange: (event: SyntheticEvent) => void;
  value: string | boolean;
  error: string | null;
}

const TextInput = ({ id, type, label, required, value, error, onChange }: InputProps) => (
  <StyledTextInputContainer>
    <Label required={required} htmlFor={id}>
      {label}
    </Label>
    <StyledTextInput
      id={id}
      name={id}
      required={required}
      value={value.toString()}
      error={error}
      type={type}
      onChange={onChange}
    />
    <Error>{error}</Error>
  </StyledTextInputContainer>
);

export default TextInput;
