import type { Preview } from '@storybook/react';

import '../src/app/styles/color.scss';
import '../src/app/styles/variables.scss';
import '../src/app/styles/typography.scss';

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
