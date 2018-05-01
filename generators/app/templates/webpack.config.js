const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname),
    filename: 'main.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react']
      },
      {
        test: /\.s?[a|c]ss$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [ require('autoprefixer'), require('precss') ]
            }
          }
        ]
      }
    ]
  }
};
