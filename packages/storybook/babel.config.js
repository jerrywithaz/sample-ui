const path = require('path');

const frameworkModules = {
  '@zerry-ui/components': path.resolve(__dirname, '../components'),
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...frameworkModules,
  },
};

const presets = [
  'babel-preset-expo',
];

const plugins = [
  ['module-resolver', moduleResolverConfig],
  ["@babel/plugin-proposal-decorators", { 'legacy': true }],
];

module.exports = function(api) {
  api.cache(true);
  return {
    presets: presets,
    plugins: plugins,
  };
};
