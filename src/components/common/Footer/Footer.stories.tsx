import { Footer } from './Footer';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Sections/Footer',
  component: Footer
} as Meta;

type Story = StoryObj<typeof Footer>;

export const Basic: Story = {
  render: () => <Footer />
};
