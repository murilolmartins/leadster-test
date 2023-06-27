import { HomeVideoListOrderSelect } from './HomeVideoListOrderSelect';

import type { Meta, StoryObj } from '@storybook/react';
import { VideoListProvider } from 'contexts';

const meta: Meta<typeof HomeVideoListOrderSelect> = {
  title: 'Sections/HomeVideoList/Components/HomeVideoListOrderSelect',
  component: HomeVideoListOrderSelect,
  decorators: [
    (Story) => {
      return (
        <VideoListProvider>
          <Story />
        </VideoListProvider>
      );
    }
  ]
};

type Story = StoryObj<typeof HomeVideoListOrderSelect>;

export const Basic: Story = {
  render: () => <HomeVideoListOrderSelect />
};

export default meta;
