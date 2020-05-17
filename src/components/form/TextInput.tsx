import React from 'react';
import styled from 'styled-components';
import { Label, Error } from './';
import { InputProps } from '../../types/components';
import { FormFieldType } from '../../types/form';

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
  border: ${({ theme, error }) =>
    error ? `1px solid ${theme.colours.brand}` : `1px solid ${theme.colours.grey}`};
  transition: ${({ theme }) => theme.border.transition};
  &:focus {
    outline: none;
    border: ${({ theme, error }) =>
      error ? `1px solid ${theme.colours.brand}` : `1px solid ${theme.colours.dark}`};
    box-shadow: ${({ theme }) => theme.border.shadow};
  }
`;

const TextInput = ({ id, type, label, required, value, error, onChange }: InputProps) => (
  <StyledTextInputContainer>
    <Label required={required} htmlFor={id} label={label} />
    <StyledTextInput
      id={id}
      name={id}
      required={required}
      value={value.toString()}
      error={error}
      type={type ? type : FormFieldType.TEXT}
      onChange={onChange}
    />
    {error && <Error message={error} />}
  </StyledTextInputContainer>
);

export default TextInput;
