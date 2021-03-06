// Dependencies
import { defineCustomElements } from 'tauix/dist/stencil/loader';

import '../src/css/themes.css';

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
      { name: 'tau-orange', class: 'tau-orange', color: '#fa9511' },
    ],
  },
  options: {
    storySort: {
      order: ['Docs', 'Components'],
    },
  },
};
