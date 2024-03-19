import { useState } from 'react';

import { CheckboxGroup } from '@/components/group/CheckboxGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'radio',
      options: ['column', 'row'],
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Checkbox Group',
    name: 'name',
    description: 'description',
    value: [],
    options: [
      {
        label: 'Checkbox A',
        value: '1',
      },
      {
        label: 'Checkbox B',
        value: '2',
      },
      {
        label: 'Checkbox C',
        value: '3',
        disabled: true,
      },
    ],
    required: false,
    errorMessage: '',
    direction: 'column',
  },
  render: function Comp(args) {
    const [value, setValue] = useState<string[]>([]);

    return <CheckboxGroup {...args} value={value} onChange={(value) => setValue(value)} />;
  },
};
