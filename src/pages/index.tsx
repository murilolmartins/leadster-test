import Head from 'next/head';

import { HomeLayout } from '@components-layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Página principal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <HomeLayout />
      </main>
    </>
  );
}
