import { navSectionLinksValues } from '@constants';

import { NavSectionContacts } from '../NavSectionContacts/NavSectionContacts';
import { NavSectionSocialMedia } from '../NavSectionSocialMedia/NavSectionSocialMedia';
import { NavSectionNavigationColumn } from './NavSectionNavigationColumn';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavSectionNavigationColumn> = {
  title: 'Sections/NavSection/Components/NavSectionNavigationColumn',
  component: NavSectionNavigationColumn
};

type Story = StoryObj<typeof NavSectionNavigationColumn>;

export const Links: Story = {
  render: () => <NavSectionNavigationColumn {...navSectionLinksValues[0]} />
};

export const Children: Story = {
  render: () => (
    <NavSectionNavigationColumn title="Siga a Leadster">
      <NavSectionSocialMedia />
      <NavSectionContacts />
    </NavSectionNavigationColumn>
  )
};

export default meta;
