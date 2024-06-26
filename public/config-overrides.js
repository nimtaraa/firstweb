const path = require('path');

module.exports = function override(config, env) {
  
  config.module.rules.unshift({
    test: /\.js$/,
    enforce: 'pre',
    use: ['source-map-loader'],
    exclude: /node_modules/
  });

  return config;
};
