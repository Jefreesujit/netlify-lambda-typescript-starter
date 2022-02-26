/* eslint-disable no-undef */
const webpack = require('webpack');

module.exports = {
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ],
  module: {
    rules: [
      {
        parser: {
          amd: false
        }
      }
    ]
  }
};
