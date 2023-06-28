import { videoListValues } from '@constants';

import { VideoModalContent } from './VideoModalContent';

import type { Meta, StoryObj } from '@storybook/react';
import { VideoModalProvider } from 'contexts';

const props = {
  title: videoListValues[0].title,
  description: videoListValues[0].description,
  url: videoListValues[0].url
};

const meta: Meta<typeof VideoModalContent> = {
  title: 'Components/VideoModal/Components/VideoModalContent',
  component: VideoModalContent,
  decorators: [
    (Story) => {
      return (
        <VideoModalProvider initialData={props}>
          <Story />
        </VideoModalProvider>
      );
    }
  ]
};

type Story = StoryObj<typeof VideoModalContent>;

export const Basic: Story = {
  render: () => <VideoModalContent />
};

export default meta;
