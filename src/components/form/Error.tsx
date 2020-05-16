import styled from 'styled-components';

const StyledError = styled.small`
  position: absolute;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colours.brand};
  top: 6.4rem;
`;

export default StyledError;
