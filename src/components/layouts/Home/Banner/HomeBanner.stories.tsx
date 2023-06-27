import { HomeBanner } from './HomeBanner';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeBanner> = {
  title: 'Sections/HomeBanner',
  component: HomeBanner
};

type Story = StoryObj<typeof HomeBanner>;

export const Basic: Story = {
  render: () => <HomeBanner />
};

export default meta;
