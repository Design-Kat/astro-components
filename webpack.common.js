const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/astro-component-viewer.js',
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['text-loader'],
      },
      {
        test: /\.(css)$/,
        use: ['text-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(
        [
          {
            from: 'packages',
            to: '.',
            toType: 'dir',
          },
          {
            from: 'public',
            to: '.',
            toType: 'dir',
          },
          {
            from: 'index.html',
            to: '.',
            toType: 'dir',
          },
          {
            from: 'favicon.ico',
            to: 'facicon.ico',
          },
          {
            from: path.resolve(__dirname, 'node_modules/@webcomponents/webcomponentsjs'),
            to: 'node_modules/@webcomponents/webcomponentsjs',
            toType: 'dir',
          },
        ],
        {}
    ),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};