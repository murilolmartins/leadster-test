import { StyledComponentsThemeProvider } from './StyledComponentsThemeProvider';

import { queryClient } from '@services';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <StyledComponentsThemeProvider>{children}</StyledComponentsThemeProvider>
    </QueryClientProvider>
  );
};

export { Providers };
