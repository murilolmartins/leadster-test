import { VideoListProvider } from '@contexts';

import { HomeVideoListSearchButtons } from './HomeVIdeoListSearchButtons';

import type { Meta, StoryObj } from '@storybook/react';

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
  render: () => <HomeVideoListSearchButtons />
};

export default meta;
