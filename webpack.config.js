const path = require('path');

module.exports = {
  target: 'web',
  entry: {
    main: [
      './src/js/main.js', // replace with the actual path to your main.js file
      'alpinejs',
      'nunjucks',
      'apexcharts'
    ]
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'src'),
    asyncChunks: true,
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
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};