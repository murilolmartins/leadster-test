import { VideoListProvider } from '@contexts';

import { HomeVideoList } from './HomeVideoList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeVideoList> = {
  title: 'Sections/HomeVideoList',
  component: HomeVideoList,
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

type Story = StoryObj<typeof HomeVideoList>;

export const Basic: Story = {
  render: () => <HomeVideoList />
};

export default meta;
