import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        // Pre-bundle Three + postprocessing + GSAP so MDX → BeamHero → Hyperspeed/TextType dev imports don’t 500 / “Failed to fetch dynamically imported module”
        include: ['three', 'postprocessing', 'gsap'],
      },
      resolve: {
        dedupe: ['three'],
      },
    });
  },
};

export default config;
