import { HomeBannerColoredTitle } from './HomeBannerColoredTitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeBannerColoredTitle> = {
  title: 'Sections/HomeBanner/Components/HomeBannerColoredTitleColoredTitle',
  component: HomeBannerColoredTitle
};

type Story = StoryObj<typeof HomeBannerColoredTitle>;

export const Basic: Story = {
  render: () => <HomeBannerColoredTitle />
};

export default meta;
