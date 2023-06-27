import { HomeCTAImage } from './HomeCTAImage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeCTAImage> = {
  title: 'Sections/HomeCTA/Components/HomeCTAImage',
  component: HomeCTAImage
};

type Story = StoryObj<typeof HomeCTAImage>;

export const Basic: Story = {
  render: () => <HomeCTAImage />
};

export default meta;
