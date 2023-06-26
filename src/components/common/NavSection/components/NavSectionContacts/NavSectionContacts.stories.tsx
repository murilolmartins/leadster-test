import { NavSectionContacts } from './NavSectionContacts';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavSectionContacts> = {
  title: 'Sections/NavSection/Components/NavSectionContacts',
  component: NavSectionContacts
};

type Story = StoryObj<typeof NavSectionContacts>;

export const Basic: Story = {
  render: () => <NavSectionContacts />
};

export default meta;
