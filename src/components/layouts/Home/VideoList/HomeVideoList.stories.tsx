import HomeVideoList from './HomeVideoList';

import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const meta: Meta<typeof HomeVideoList> = {
  title: 'Sections/HomeVideoList',
  component: HomeVideoList,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    )
  ]
};

type Story = StoryObj<typeof HomeVideoList>;

export const Basic: Story = {
  render: () => <HomeVideoList />
};

export default meta;
