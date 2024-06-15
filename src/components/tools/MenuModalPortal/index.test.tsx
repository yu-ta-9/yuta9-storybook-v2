import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MenuModalPortal } from '@/components/tools/MenuModalPortal';

const user = userEvent.setup();

describe('MenuModalPortal', () => {
  test('a button is existing', () => {
    const onClickMock = vi.fn();
    render(
      <MenuModalPortal
        buttonElement={
          <button type='button' onClick={onClickMock}>
            Click me
          </button>
        }
        menuElement={
          <ul>
            <li>test1</li>
            <li>test2</li>
          </ul>
        }
        area-label='Menu Test'
        verticalPosition='top'
        horizontalPosition='left'
        verticalOffset={8}
        horizontalOffset={8}
      />,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('open a menu when clicking a button', async () => {
    const onClickMock = vi.fn();
    render(
      <MenuModalPortal
        buttonElement={
          <button type='button' onClick={onClickMock}>
            Click me
          </button>
        }
        menuElement={
          <ul>
            <li>test1</li>
            <li>test2</li>
          </ul>
        }
        area-label='Menu Test'
        verticalPosition='top'
        horizontalPosition='left'
        verticalOffset={8}
        horizontalOffset={8}
      />,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('some attributes for a11y attached to modal and a button', async () => {
    const onClickMock = vi.fn();
    render(
      <MenuModalPortal
        buttonElement={
          <button type='button' onClick={onClickMock}>
            Click me
          </button>
        }
        menuElement={
          <ul>
            <li>test1</li>
            <li>test2</li>
          </ul>
        }
        area-label='Menu Test'
        verticalPosition='top'
        horizontalPosition='left'
        verticalOffset={8}
        horizontalOffset={8}
      />,
    );

    const button = screen.getByRole('button');
    await user.click(button);
    const menu = screen.getByRole('dialog');
    expect(button).toHaveAttribute('aria-controls', menu.id);
    expect(menu).toHaveAttribute('aria-label', 'Menu Test');
    expect(menu).toHaveAttribute('aria-hidden', 'false');
    expect(menu).toHaveAttribute('aria-modal', 'true');
  });
});
