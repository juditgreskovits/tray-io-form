import React, { SyntheticEvent, ReactNode } from 'react';
import styled from 'styled-components';
import { FormField } from '../../types/form';

const StyledCheckboxInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  margin: 16px 0;
  padding-bottom: 1rem;
`;

const StyledCheckboxInputLabel = styled.label<{ required: boolean }>`
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
      <input name={id} required={required} checked={value === true} type="checkbox" onChange={onChange} />
      <StyledCheckboxInputLabel required={required} htmlFor={id}>
        {label}
      </StyledCheckboxInputLabel>
      {renderError(error)}
    </StyledCheckboxInputContainer>
  );
};

export default CheckboxInput;
