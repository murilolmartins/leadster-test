import { ReactNode } from 'react';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { NavSection } from '../NavSection/NavSection';
import { VideoModal } from '../VideoModal/VideoModal';

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
