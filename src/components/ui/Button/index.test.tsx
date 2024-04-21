import { render, screen } from '@testing-library/react';

import { Button } from '@/components/ui/Button';

describe('Button', () => {
  beforeEach(() => {
    render(<Button label='Label' theme='main' />);
  });

  test('labelが表示されること', async () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Label');
  });
});
