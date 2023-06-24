import { ReactNode } from 'react';

import theme from '../styles/theme';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';

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
