import dynamic from 'next/dynamic';

import { PageSection } from '@components-common';
import { VideoListProvider } from '@contexts';
import { theme } from '@styles';

import { HomeBanner } from './Banner/HomeBanner';
import { HomeCTA } from './CTA/HomeCTA';

import { Spin } from 'antd';

const HomeVideoList = dynamic(() => import('./VideoList/HomeVideoList'), {
  loading: () => (
    <PageSection height="500px">
      <Spin size="large" style={{ color: theme.colors.primary }} />
    </PageSection>
  ),
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
