import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import { ProgressContainer, FormContainer } from './containers';
import { AppTheme } from './components';
import { Theme } from './types/theme';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${({ theme }: { theme: Theme }) => theme.colours.light};
    color: ${({ theme }: { theme: Theme }) => theme.colours.dark};
    font-family: ${({ theme }: { theme: Theme }) => theme.font.family};
    font-size: 62.5%;
  }

  input {
    border-radius: 0;
    -webkit-appearance: none;
  }
`;

function App() {
  return (
    <AppTheme>
      <Reset />
      <GlobalStyle />
      <ProgressContainer />
      <FormContainer pageIndex={0} />
      <FormContainer pageIndex={1} />
      <FormContainer pageIndex={2} />
    </AppTheme>
  );
}

export default App;
