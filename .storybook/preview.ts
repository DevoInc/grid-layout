import type { Preview, ReactRenderer } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '@devoinc/genesys-brand-devo';
// import '@devoinc/genesys-base-styles/dist/styles.css';
import '@devoinc/genesys-base-styles/dist/css/styles.css';
import './preview.scss';

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
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light,
        dark,
      },
      defaultTheme:
        window?.matchMedia &&
        window?.matchMedia('(prefers-color-scheme: dark)')?.matches
          ? 'dark'
          : 'light',
      Provider: ThemeProvider,
      // GlobalStyles: GlobalStyles,
    }),
  ],
  globalTypes: {
    debug: {
      description: 'Debug the grid',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Debug',
        icon: 'dashboard',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: true, title: 'true' },
          { value: false, title: 'false' },
        ],
        // Change title based on selected value
        dynamicTitle: false,
      },
    },
  },
  initialGlobals: {
    debug: false,
  },
};

export default preview;
