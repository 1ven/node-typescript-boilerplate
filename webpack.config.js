module.exports = {
  devtool: 'eval',
  entry: './src/index.ts',
  output: {
    filename: './build/index.js'
  },
  target: 'node',
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
    }],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
};
