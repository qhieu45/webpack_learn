const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  mode: 'production',
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
        test: /\.css$/
      },
      {
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ],
        test: /\.(jpe?g|png|gif|svg)$/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    })
  ],
}

module.exports = config;

// path is absolute path
// use: ['style-loader', 'css-loader'], // order from right to left css => style
