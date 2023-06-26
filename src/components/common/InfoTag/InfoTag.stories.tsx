import ratingTag from '@images/rating.webp';

import { InfoTag } from './InfoTag';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/InfoTag',
  component: InfoTag
} as Meta;

type Story = StoryObj<typeof InfoTag>;

export const Basic: Story = {
  render: () => <InfoTag src={ratingTag} text="4.9/5 média de satisfação" />
};
