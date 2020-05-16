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

export default StyledInputLabel;
