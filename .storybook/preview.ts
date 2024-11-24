import type { Preview } from '@storybook/react';

import { withScreenshot } from 'storycap';

import '../src/styles/reset.css';
import '../src/styles/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
export const decorators = [withScreenshot];
