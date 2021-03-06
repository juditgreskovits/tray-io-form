import React from 'react';
import styled from 'styled-components';
import { Label, Error } from './';
import { InputProps } from '../../types/components';

const StyledCheckboxInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  margin: 16px 0;
  padding-bottom: 1rem;
`;

const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    margin-left: 40px;
    padding: 0;
  }

  & + label:before {
    position: absolute;
    top: -4px;
    left: -40px;
    content: '';
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.colours.grey};
  }

  & + label:after {
    content: '';
    position: absolute;
    left: -36px;
    top: 2px;
    width: 12px;
    height: 5px;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(-45deg);
    opacity: 0;
  }

  &:hover + label:after {
    opacity: 0.5;
  }

  &:focus + label:before {
    box-shadow: ${({ theme }) => theme.border.shadow};
  }

  &:checked + label:before {
    background-color: ${({ theme }) => theme.colours.brand};
  }

  &:checked + label:after {
    opacity: 1;
  }
`;

const CheckboxInput = ({ id, label, required, value, error, onChange }: InputProps) => (
  <StyledCheckboxInputContainer>
    <StyledCheckbox
      id={id}
      name={id}
      required={required}
      checked={value === true}
      type="checkbox"
      onChange={onChange}
    />
    <Label required={required} htmlFor={id} label={label} />
    {error && <Error message={error} />}
  </StyledCheckboxInputContainer>
);

export default CheckboxInput;
