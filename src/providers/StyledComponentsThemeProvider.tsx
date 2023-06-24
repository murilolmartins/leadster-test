'use client';

import { ReactNode } from 'react';

import theme from '../styles/theme';

import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

interface StyledComponentsThemeProviderProps {
  children: ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body {
    color: red;
  }
`;

const StyledComponentsThemeProvider = ({
  children
}: StyledComponentsThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export { StyledComponentsThemeProvider };
