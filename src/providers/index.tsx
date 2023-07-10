import { StyledComponentsThemeProvider } from './StyledComponentsThemeProvider';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { VideoModalProvider } from 'contexts';
import { queryClient } from 'services/queryClient.service';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <VideoModalProvider>
        <StyledComponentsThemeProvider>
          {children}
        </StyledComponentsThemeProvider>
      </VideoModalProvider>
    </QueryClientProvider>
  );
};

export { Providers };
