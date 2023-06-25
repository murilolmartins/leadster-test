import { ReactNode } from 'react';

import { Header } from '../Header/Header';
import { NavSection } from '../NavSection/NavSection';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <NavSection />
    </>
  );
};

export { RootLayout };
