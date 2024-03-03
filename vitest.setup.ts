import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// HACK: https://github.com/vitest-dev/vitest/issues/1430#issuecomment-1650242784
// eslint-disable-next-line vitest/require-top-level-describe
afterEach(() => {
  cleanup();
});
