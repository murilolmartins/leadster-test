import { StyledComponentsThemeProvider } from './StyledComponentsThemeProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyledComponentsThemeProvider>{children}</StyledComponentsThemeProvider>
  );
};

export { Providers };
