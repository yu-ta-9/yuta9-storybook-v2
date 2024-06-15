import { MenuModalPortal } from '@/components/tools/MenuModalPortal';
import { Button } from '@/components/ui/Button';

import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';

const meta = {
  tags: ['autodocs'],
  component: MenuModalPortal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof MenuModalPortal>;

export default meta;
type Story = StoryObj<typeof meta>;

const MenuElementMock: FC = () => {
  return (
    <div style={{ padding: 8, width: 240 }}>
      <p>Menu Modal</p>
      <ul>
        <li>option1</li>
        <li>option2</li>
      </ul>
    </div>
  );
};

export const TopAndLeft: Story = {
  args: {
    buttonElement: <Button type='button' theme='main' label='Open Menu Modal' />,
    menuElement: <MenuElementMock />,
    label: 'Menu',
    verticalPosition: 'top',
    horizontalPosition: 'left',
    verticalOffset: 8,
    horizontalOffset: 8,
  },
};

export const BottomAndRight: Story = {
  args: {
    buttonElement: <Button type='button' theme='main' label='Open Menu Modal' />,
    menuElement: <MenuElementMock />,
    label: 'Menu',
    verticalPosition: 'bottom',
    horizontalPosition: 'right',
    verticalOffset: 8,
    horizontalOffset: 8,
  },
};
