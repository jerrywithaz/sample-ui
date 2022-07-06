const path = require("path");

const frameworkModules = {
  "@zerry-ui/components": path.resolve(__dirname, "../components"),
};

const moduleResolverConfig = {
  root: path.resolve("./"),
  alias: {
    ...frameworkModules,
  },
  "extensions": [".js", ".jsx", ".ts", ".tsx"]
};

const presets = process.env.APP === "web" ? [] : ["babel-preset-expo"];

const plugins =
  process.env.APP === "web"
    ? [
        ["module-resolver", moduleResolverConfig],
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["react-native-reanimated/plugin"],
        ["babel-plugin-styled-components", { "ssr": false }]
      ]
    : [
        ["module-resolver", moduleResolverConfig],
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["react-native-reanimated/plugin"],
        ["babel-plugin-styled-components", { "ssr": false }]
      ];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: presets,
    plugins: plugins,
  };
};
