import { videoListValues } from '@constants';
import { VideoListProvider } from '@contexts';

import { HomeLayout } from './HomeLayout';

import type { Meta, StoryObj } from '@storybook/react';
import { sortArray } from '@utils';

const meta: Meta<typeof HomeLayout> = {
  title: 'Layouts/HomeLayout',
  component: HomeLayout,
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

type Story = StoryObj<typeof HomeLayout>;

export const Basic: Story = {
  render: () => <HomeLayout />
};

export default meta;
