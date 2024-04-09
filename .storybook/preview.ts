import type { Preview } from '@storybook/react';

import '../src/styles/reset.css';
import '../src/styles/tokens.css';
import '../src/styles/theme/theme.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
