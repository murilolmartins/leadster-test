import { NavSectionSocialMedia } from './NavSectionSocialMedia';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavSectionSocialMedia> = {
  title: 'Sections/NavSection/Components/NavSectionSocialMedia',
  component: NavSectionSocialMedia
};

type Story = StoryObj<typeof NavSectionSocialMedia>;

export const Basic: Story = {
  render: () => <NavSectionSocialMedia />
};

export default meta;
