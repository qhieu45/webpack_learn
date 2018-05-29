const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js' 
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
