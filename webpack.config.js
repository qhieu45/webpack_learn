const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js' 
  },
  mode: 'production'
}

module.exports = config;

// path is absolute path