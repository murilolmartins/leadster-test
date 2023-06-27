import { videoListValues } from '@constants';

import { VideoModal } from './VideoModal';

import type { Meta, StoryObj } from '@storybook/react';
import { VideoModalProvider } from 'contexts';

const props = {
  title: videoListValues[0].title,
  description: videoListValues[0].description,
  url: videoListValues[0].url
};

const meta: Meta<typeof VideoModal> = {
  title: 'Components/VideoModal',
  component: VideoModal,
  decorators: [
    (Story) => {
      return (
        <VideoModalProvider initialData={props} initialVisible>
          <Story />
        </VideoModalProvider>
      );
    }
  ]
};

type Story = StoryObj<typeof VideoModal>;

export const Basic: Story = {
  render: () => <VideoModal />
};

export default meta;
