import { Accordion } from '.';

import type { StoryObj } from '@storybook/react';

const meta = {
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accordion Sample',
    innerElement: <p>Inner Element</p>,
  },
};
