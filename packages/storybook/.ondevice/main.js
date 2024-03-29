module.exports = {
    stories: ["../stories/**/*.stories.?(ts|tsx|js|jsx)"],
    addons: [
      "@storybook/addon-ondevice-controls",
      "@storybook/addon-ondevice-backgrounds",
      "@storybook/addon-ondevice-actions",
    ],
    babel: (config) => {
      return {
        ...config,
      }
    }
  };