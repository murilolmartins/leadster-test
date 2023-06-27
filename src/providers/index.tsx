import { StyledComponentsThemeProvider } from './StyledComponentsThemeProvider';

import { VideoModalProvider } from 'contexts';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <VideoModalProvider>
      <StyledComponentsThemeProvider>{children}</StyledComponentsThemeProvider>
    </VideoModalProvider>
  );
};

export { Providers };
