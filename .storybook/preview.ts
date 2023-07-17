import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '../src/styles';

import { initialize, mswLoader } from 'msw-storybook-addon';
import { rest } from 'msw';
import videos from "../src/db/videos.json"

initialize({
  onUnhandledRequest: "bypass"
});


export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    msw: {
      handlers: {
        videos: [
           rest.get('/api/videos', (req, res, ctx) => {
              return res(
                ctx.json(videos)
              )
           }),
        ],
      }
   }
  },
  loaders: [mswLoader]
};

export default preview;
