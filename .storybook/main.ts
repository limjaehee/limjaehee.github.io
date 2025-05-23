import path from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['..\\public'],
  webpackFinal: async config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        components: path.resolve(__dirname, '../src/components'),
        assets: path.resolve(__dirname, '../src/assets'),
      },
    }
    return config
  },
}
export default config
