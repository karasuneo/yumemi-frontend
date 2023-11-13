import path from 'path';

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { Configuration } from 'webpack';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal(config: Configuration) {
    config.resolve!.modules = [
      ...(config.resolve!.modules || []),
      path.resolve(__dirname, '../src/app/styles/variables.scss'),
    ];

    config.resolve!.plugins = [
      ...(config.resolve!.plugins || []),
      new TsconfigPathsPlugin(),
    ];
    return config;
  },
};
export default config;
