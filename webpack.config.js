module.exports = {
  devtool: 'eval',
  entry: './src/index.ts',
  output: {
    filename: './build/index.js'
  },
  target: 'node',
  module: {
    loaders: [{
      test: /\.ts?$/,
      loader: 'ts-loader',
    }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
