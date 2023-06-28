import { HomeBanner } from './Banner/HomeBanner';
import { HomeCTA } from './CTA/HomeCTA';
import { HomeVideoList } from './VideoList/HomeVideoList';

import { VideoListProvider } from 'contexts';

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
