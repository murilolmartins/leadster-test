import { Button } from './Button';

import { customRender } from '@test';

describe('<Button/>', () => {
  it('should render Button', () => {
    const { getByRole } = customRender(<Button>Button</Button>);

    const button = getByRole('button');

    expect(button).toBeVisible();
  });
});
