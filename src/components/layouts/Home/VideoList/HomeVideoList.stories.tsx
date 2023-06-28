import { videoListValues } from '@constants';
import { VideoListProvider } from '@contexts';

import HomeVideoList from './HomeVideoList';

import type { Meta, StoryObj } from '@storybook/react';
import { sortArray } from '@utils';

const meta: Meta<typeof HomeVideoList> = {
  title: 'Sections/HomeVideoList',
  component: HomeVideoList,
  decorators: [
    (Story) => {
      return (
        <VideoListProvider
          initialData={{
            search: sortArray(videoListValues, 'createdAt'),
            initialData: videoListValues
          }}
          initialLoading={false}
        >
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
