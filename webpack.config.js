const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        loader: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/',
              publicPath: 'assets/img/',
            },
          },
        ],
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'assets/docs/',
              outputPath: 'assets/docs/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new FaviconsWebpackPlugin('./src/assets/img/developer.svg'), // svg works too!
    new MiniCSSExtractPlugin(),
  ],
};
