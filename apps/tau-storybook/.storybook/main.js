module.exports = {
  stories: [
    '../../../libs/web-components/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    'storybook-addon-themes',
    '@etchteam/storybook-addon-status',
    '@storybook/addon-storysource',
  ],
  babelDefault: config => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        [require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'h' }, 'preset'],
      ],
      presets: [['@babel/typescript', { jsxPragma: 'h' }]],
    };
  },
};
