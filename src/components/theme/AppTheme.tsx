import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  font: {
    family: 'Ubuntu, Helvetica, sans-serif',
  },
  colours: {
    grey: '#dddddd',
    brand: '#FF69B4',
    dark: '#111',
    light: '#fff',
  },
  border: {
    radius: '4px',
  },
  layout: {
    maxWidth: '568px',
  },
};

interface ThemeProps {
  children: ReactNode | ReactNode[];
}

const AppTheme = ({ children }: ThemeProps) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default AppTheme;
