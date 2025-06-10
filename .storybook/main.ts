import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(ts|tsx|mdx )"],
  addons: ["@storybook/addon-essentials", "@storybook/blocks"],
};

export default config;
