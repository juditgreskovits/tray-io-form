import styled from 'styled-components';

const StyledLayout = styled.div`
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 6rem 4rem;
  background-color: ${({ theme }) => theme.colours.light};
`;

export default StyledLayout;
