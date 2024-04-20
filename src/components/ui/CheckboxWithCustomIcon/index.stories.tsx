import { useState } from 'react';

import { CheckboxWithCustomIcon } from '@/components/ui/CheckboxWithCustomIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: CheckboxWithCustomIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckboxWithCustomIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'CheckboxA',
    isError: false,
    disabled: false,
    indeterminate: false,
  },
  render: function Comp(args) {
    const [isChecked, setIsChecked] = useState(false);

    return <CheckboxWithCustomIcon {...args} checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />;
  },
};
