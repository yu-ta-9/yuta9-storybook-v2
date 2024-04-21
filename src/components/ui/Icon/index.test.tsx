import { render, screen } from '@testing-library/react';

import { Icon } from '@/components/ui/Icon';
import { ICON_NAMES } from '@/components/ui/Icon/const';

describe('Icon', () => {
  test.each(ICON_NAMES)('area-hidden="true"が設定されていること', (name) => {
    render(<Icon name={name} size={24} />);
    const icon = screen.getByTestId(name);
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
});
