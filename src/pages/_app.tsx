import type { AppProps } from 'next/app';

import { RootLayout } from '@components-layout';
import { Providers } from '@providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Providers>
  );
}
