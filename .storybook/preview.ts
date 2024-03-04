import type { Preview, ReactRenderer } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '@devoinc/genesys-brand-devo';
import '@devoinc/genesys-base-styles/dist/styles.css';
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
};

export default preview;
