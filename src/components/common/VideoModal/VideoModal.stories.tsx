import { useEffect } from 'react';

import { videoListValues } from '@constants';
import { useVideoModal } from '@hooks';

import { VideoModal } from './VideoModal';

import type { Meta, StoryObj } from '@storybook/react';

const props = {
  title: videoListValues[0].title,
  description: videoListValues[0].description,
  url: videoListValues[0].url
};

const meta: Meta<typeof VideoModal> = {
  title: 'Components/VideoModal',
  component: VideoModal
};

type Story = StoryObj<typeof VideoModal>;

const Component = () => {
  const { handleOpenVideoModal } = useVideoModal();

  useEffect(() => {
    handleOpenVideoModal(props);
  }, [handleOpenVideoModal]);

  return <VideoModal />;
};

export const Basic: Story = {
  render: () => <Component />
};

export default meta;
