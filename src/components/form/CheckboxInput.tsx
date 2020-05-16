import React, { SyntheticEvent, ReactNode } from 'react';
import styled from 'styled-components';
import Label from './Label';
import { FormField } from '../../types/form';

const StyledCheckboxInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  margin: 16px 0;
  padding-bottom: 1rem;
`;

const StyledCheckboxInputLabel = styled(Label)``;

const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before {
    content: '';
    margin-right: 1rem;
    display: inline-block;
    vertical-align: text-top;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colours.light};
    border: ${({ theme }) => `1px solid ${theme.colours.brand}`};
  }

  &:hover + label:before {
    background-color: ${({ theme }) => theme.colours.brand};
  }

  &:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  &:checked + label:before {
    background-color: ${({ theme }) => theme.colours.brand};
  }

  &:checked + label:after {
    content: '';
    position: absolute;
    left: 4px;
    top: 8px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`;

interface CheckboxInputProps extends FormField {
  onChange: (event: SyntheticEvent) => void;
  value: string | boolean;
  error: string | null;
  renderError: (error: string | null) => ReactNode;
}

const CheckboxInput = ({ id, label, required, value, error, onChange, renderError }: CheckboxInputProps) => {
  console.log('value = ', value);
  return (
    <StyledCheckboxInputContainer>
      <StyledCheckbox name={id} required={required} checked={value === true} type="checkbox" onChange={onChange} />
      <Label required={required} htmlFor={id}>
        {label}
      </Label>
      {renderError(error)}
    </StyledCheckboxInputContainer>
  );
};

export default CheckboxInput;
