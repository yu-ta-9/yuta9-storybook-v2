import { render, screen, fireEvent } from '@testing-library/react';

import { DivButton } from '@/components/tools/DivButton';

describe('DivButton', () => {
  test('attribute `role` is existing as button', async () => {
    const onClickMock = vi.fn();
    render(
      <DivButton tabIndex={0} onClick={onClickMock}>
        Click me
      </DivButton>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('fire event with click', async () => {
    const onClickMock = vi.fn();
    render(
      <DivButton tabIndex={0} onClick={onClickMock}>
        Click me
      </DivButton>,
    );

    await fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalled();
  });

  test('fire event with key down `Enter`', async () => {
    const onClickMock = vi.fn();
    render(
      <DivButton tabIndex={0} onClick={onClickMock}>
        Click me
      </DivButton>,
    );

    await fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter', code: 'Enter' });
    expect(onClickMock).toHaveBeenCalled();
  });

  test('fire event with key down `Space`', async () => {
    const onClickMock = vi.fn();
    render(
      <DivButton tabIndex={0} onClick={onClickMock}>
        Click me
      </DivButton>,
    );

    await fireEvent.keyDown(screen.getByRole('button'), { key: ' ', code: 'Space' });
    expect(onClickMock).toHaveBeenCalled();
  });
});
