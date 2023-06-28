import { ReactNode } from 'react';

import { VideoModal } from '@components-common';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { NavSection } from './NavSection/NavSection';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <NavSection />
      <Footer />
      <VideoModal />
    </>
  );
};

export { RootLayout };
