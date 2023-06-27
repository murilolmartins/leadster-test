import { HomeBanner } from './Banner/HomeBanner';
import { HomeCTA } from './CTA/HomeCTA';
import { VideoList } from './VideoList/VideoList';

import { VideoListProvider } from '@contexts';

const HomeLayout = () => {
  return (
    <>
      <HomeBanner />
      <VideoListProvider>
        <VideoList />
      </VideoListProvider>
      <HomeCTA />
    </>
  );
};

export { HomeLayout };
