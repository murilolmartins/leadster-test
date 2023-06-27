import { VideoModalProvider } from '@contexts';

import { StyledComponentsThemeProvider } from './StyledComponentsThemeProvider';

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
