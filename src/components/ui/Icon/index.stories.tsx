import { Icon } from '@/components/ui/Icon';
import { ICON_NAMES } from '@/components/ui/Icon/const';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  component: Icon,
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
    size: 24,
  },
  render: (args) => (
    <div>
      <ul
        style={{
          display: 'flex',
          gap: 8,
          listStyle: 'none',
          flexWrap: 'wrap',
          width: '100%',
          padding: 0,
          margin: 0,
        }}
      >
        {ICON_NAMES.map((name) => (
          <li key={name} style={{ backgroundColor: '#f8f7f6' }}>
            <div
              style={{
                display: 'flex',
                gap: 4,
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 180,
                border: '1px solid #000',
                padding: 8,
                borderRadius: 4,
              }}
            >
              <span style={{ wordBreak: 'keep-all', overflowX: 'auto' }}>{name}</span>

              <Icon {...args} name={name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  ),
};
