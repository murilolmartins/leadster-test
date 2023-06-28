import dynamic from 'next/dynamic';

import { VideoListProvider } from '@contexts';

import { HomeBanner } from './Banner/HomeBanner';
import { HomeCTA } from './CTA/HomeCTA';

const HomeVideoList = dynamic(() => import('./VideoList/HomeVideoList'), {
  ssr: false
});

const HomeLayout = () => {
  return (
    <>
      <HomeBanner />
      <VideoListProvider>
        <HomeVideoList />
      </VideoListProvider>
      <HomeCTA />
    </>
  );
};

export { HomeLayout };
