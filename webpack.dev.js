/* eslint-disable no-unused-vars */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
/* eslint-enable no-unused-vars */

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 9001,
  },
  /* plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: "dummy-service-worker.js",
          to: path.resolve(__dirname, "dist") + "/service-worker.js",
          toType: "file"
        }
      ],
      {}
    )
  ] */
});
