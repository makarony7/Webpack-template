const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 3. Creates `style` nodes from JS strings
          'style-loader',
          // 2. Translates CSS into CommonJS
          'css-loader',
          // 1. Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  }
};