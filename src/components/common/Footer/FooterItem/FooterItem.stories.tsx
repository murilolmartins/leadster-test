import { footerItemsValues } from '@constants';

import { FooterItem } from './FooterItem';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Sections/Footer/Components/FooterItem',
  component: FooterItem
} as Meta;

type Story = StoryObj<typeof FooterItem>;

export const Basic: Story = {
  render: () => <FooterItem {...footerItemsValues[0]} />
};
