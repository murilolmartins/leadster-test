import { ReactNode } from 'react';

import theme from '../styles/theme';

import { GlobalStyles } from '@styles';
import { ThemeProvider } from 'styled-components';

interface StyledComponentsThemeProviderProps {
  children: ReactNode;
}

const StyledComponentsThemeProvider = ({
  children
}: StyledComponentsThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export { StyledComponentsThemeProvider };
