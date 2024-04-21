import { Icon } from '@/components/ui/Icon';
import { render, screen } from '@testing-library/react';

describe('Icon', () => {
  test('area-hidden="true"が設定されていること', () => {
    render(<Icon name='asterisk' size={24} />);
    const icon = screen.getByTestId('asterisk');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
});
