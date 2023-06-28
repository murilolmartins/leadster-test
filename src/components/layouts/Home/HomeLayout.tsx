import { VideoListProvider } from '@contexts';

import { HomeBanner } from './Banner/HomeBanner';
import { HomeCTA } from './CTA/HomeCTA';
import { HomeVideoList } from './VideoList/HomeVideoList';

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
