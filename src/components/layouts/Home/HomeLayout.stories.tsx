import { HomeLayout } from './HomeLayout';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeLayout> = {
  title: 'Layouts/HomeLayout',
  component: HomeLayout
};

type Story = StoryObj<typeof HomeLayout>;

export const Basic: Story = {
  render: () => <HomeLayout />
};

export default meta;
