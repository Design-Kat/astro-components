/* eslint-disable no-unused-vars */
const path = require('path');
const css = require('css-loader');
/* eslint-enable no-unused-vars */

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
