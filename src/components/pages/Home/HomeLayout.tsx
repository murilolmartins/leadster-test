import { HomeBanner } from './Banner/HomeBanner';
import { HomeCTA } from './CTA/HomeCTA';
import { VideoList } from './VideoList/VideoList';

const HomeLayout = () => {
  return (
    <>
      <HomeBanner />
      <VideoList />
      <HomeCTA />
    </>
  );
};

export { HomeLayout };
