import { HomeCTAInfo } from './HomeCTAInfo';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeCTAInfo> = {
  title: 'Sections/HomeCTA/Components/HomeCTAInfo',
  component: HomeCTAInfo
};

type Story = StoryObj<typeof HomeCTAInfo>;

export const Basic: Story = {
  render: () => <HomeCTAInfo />
};

export default meta;
