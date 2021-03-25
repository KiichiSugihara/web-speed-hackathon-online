'use strict';

const path = require('path');

const importPlugin = require('postcss-import');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    importPlugin({
      root: path.resolve(__dirname, 'src'),
    }),
    cssnano(),
    autoprefixer(),

    customProperties({ preserve: false }),
  ],

  map: { inline: false },
};
