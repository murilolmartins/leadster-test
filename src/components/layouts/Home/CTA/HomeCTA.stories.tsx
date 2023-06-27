import { HomeCTA } from './HomeCTA';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeCTA> = {
  title: 'Sections/HomeCTA',
  component: HomeCTA
};

type Story = StoryObj<typeof HomeCTA>;

export const Basic: Story = {
  render: () => <HomeCTA />
};

export default meta;
