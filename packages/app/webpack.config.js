const createExpoWebpackConfigAsync = require("@expo/webpack-config");
// const { getExpoBabelLoader } = require("@expo/webpack-config/utils");

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
      test: /\.(mjs|[jt]sx?)$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: [
                ["babel-preset-expo", {}],
            //   ["@babel/preset-env", { targets: { node: "8" } }],
            //   [
            //     "@babel/preset-typescript",
            //     { isTSX: true, allExtensions: true }
            //   ]
            ]
          }
        }
      ],
      exclude: /node_modules/
    });

  // Maybe you want to turn off compression in dev mode.
  if (config.mode === "development") {
    config.devServer.compress = false;
  }

  // Or prevent minimizing the bundle when you build.
  if (config.mode === "production") {
    config.optimization.minimize = false;
  }

  // Finally return the new config for the CLI to use.
  return config;
};
