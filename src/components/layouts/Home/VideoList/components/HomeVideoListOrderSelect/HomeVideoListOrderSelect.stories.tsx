import { VideoListKeys } from '@enums';

import { HomeVideoListOrderSelect } from './HomeVideoListOrderSelect';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeVideoListOrderSelect> = {
  title: 'Sections/HomeVideoList/Components/HomeVideoListOrderSelect',
  component: HomeVideoListOrderSelect
};

type Story = StoryObj<typeof HomeVideoListOrderSelect>;

export const Basic: Story = {
  render: () => (
    <HomeVideoListOrderSelect
      orderTerm={VideoListKeys.CREATED_AT}
      handleOrderSearchVideos={() => console.log('handleOrderSearchVideos')}
    />
  )
};

export default meta;
