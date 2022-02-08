// Dependencies
import { defineCustomElements } from 'tau-components/dist/stencil/loader';

import 'tau-components/dist/core/themes/themes.css';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'tau-light',
    list: [
      { name: 'tau-light', class: 'tau-light', color: '#f5f5f5' },
      { name: 'tau-dark', class: 'tau-dark', color: '#141518' },
    ],
  },
  options: {
    storySort: {
      order: ['Docs', 'Components'],
    },
  },
};
