module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../src/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'addon-screen-reader'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
