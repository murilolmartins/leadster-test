import { videoListValues } from '@constants';

import { HomeVideoListCard } from './HomeVideoListCard';

import type { Meta, StoryObj } from '@storybook/react';
import { VideoModalProvider } from 'contexts';

const meta: Meta<typeof HomeVideoListCard> = {
  title: 'Sections/HomeVideoList/Components/HomeVideoListCard',
  component: HomeVideoListCard,
  decorators: [
    (Story) => {
      return (
        <VideoModalProvider>
          <Story />
        </VideoModalProvider>
      );
    }
  ]
};

const props = {
  category: videoListValues[0].category,
  title: videoListValues[0].title,
  thumbnail: videoListValues[0].thumbnail,
  description: videoListValues[0].description,
  url: videoListValues[0].url
};

type Story = StoryObj<typeof HomeVideoListCard>;

export const Basic: Story = {
  render: () => <HomeVideoListCard {...props} />
};

export default meta;
