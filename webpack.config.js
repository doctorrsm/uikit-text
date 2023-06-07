const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'uikit.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  watch: true,
  devServer: {
    static: {
        directory: path.resolve(__dirname, "dist")
      },
    compress: true,
    port: 8080,
  },
};