const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    'index': './src/index.ts',
    'collections/isoflow/index': './src/collections/isoflow/index.ts',
    'collections/aws/index': './src/collections/aws/index.ts',
    'collections/azure/index': './src/collections/azure/index.ts',
    'collections/gcp/index': './src/collections/gcp/index.ts',
    'collections/kubernetes/index': './src/collections/kubernetes/index.ts'
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        type: 'asset/inline'
      }
    ]
  },
}