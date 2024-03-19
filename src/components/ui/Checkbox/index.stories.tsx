import { useState } from 'react';

import { Checkbox } from '@/components/ui/Checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'CheckboxA',
    isError: false,
    disabled: false,
  },
  render: function Comp(args) {
    const [isChecked, setIsChecked] = useState(false);

    return <Checkbox {...args} checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />;
  },
};
