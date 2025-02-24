const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: { port: 3000 },
  output: { publicPath: "http://localhost:3000/" },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "mainer",
      remotes: {
        header: "header@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: {
          eager: true,
        },
        "react-dom": {
          eager: true,
        },
      },
    }),
    
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
};
