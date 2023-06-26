import { NavSection } from './NavSection';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavSection> = {
  title: 'Sections/NavSection',
  component: NavSection
};

type Story = StoryObj<typeof NavSection>;

export const Primary: Story = {
  render: () => <NavSection />
};

export default meta;
