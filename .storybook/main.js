/** @type { import('@storybook/vue-webpack5').StorybookConfig } */
const path = require('path'); // Para poder utilizar las rutas del sistema

const config = {
  stories: ['../components/stories/**/*.mdx', '../components/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'mixins': path.resolve(__dirname, '../../../mixins'),
      '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};

export default config;
