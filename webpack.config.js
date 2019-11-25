const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    mode: "development",
    entry: {
      app: "./src/app.tsx",
      electron: "./src/electron.ts"
    },
    target: "electron-renderer",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: "ts-loader" }]
        }
      ]
    },
    output: {
      filename: "[name].js",
      path: __dirname + "/build"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  }
];
