import HomeVideoListSearchButtons from './HomeVIdeoListSearchButtons';

import type { Meta, StoryObj } from '@storybook/react';
import { VideoListProvider } from 'contexts';

const meta: Meta<typeof HomeVideoListSearchButtons> = {
  title: 'Sections/HomeVideoList/Components/HomeVideoListSearchButtons',
  component: HomeVideoListSearchButtons,
  decorators: [
    (Story) => {
      return (
        <VideoListProvider>
          <Story />
        </VideoListProvider>
      );
    }
  ]
};

type Story = StoryObj<typeof HomeVideoListSearchButtons>;

export const Basic: Story = {
  render: () => (
    <HomeVideoListSearchButtons
      handleFilterSearchVideos={() => console.log('handleFilterSearchVideos')}
      handleResetSearchVideos={() => console.log('handleResetSearchVideos')}
    />
  )
};

export default meta;
