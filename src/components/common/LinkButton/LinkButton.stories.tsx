import LinkButton from './LinkButton';
import { LinkButtonType } from './LinkButton.enums';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/LinkButton',
  component: LinkButton
};

type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  render: () => (
    <LinkButton buttontype={LinkButtonType.PRIMARY} href="/">
      Link
    </LinkButton>
  )
};

export default meta;
