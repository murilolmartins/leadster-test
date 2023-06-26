import { NavSectionHeader } from './NavSectionHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavSectionHeader> = {
  title: 'Sections/NavSection/Components/NavSectionHeader',
  component: NavSectionHeader
};

type Story = StoryObj<typeof NavSectionHeader>;

export const Basic: Story = {
  render: () => <NavSectionHeader />
};

export default meta;
