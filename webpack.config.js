const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    'index': './src/index.ts',
    'isoflow': './src/collections/isoflow/index.ts',
    'aws': './src/collections/aws/index.ts',
    'azure': './src/collections/azure/index.ts',
    'gcp': './src/collections/gcp/index.ts',
    'kubernetes': './src/collections/kubernetes/index.ts'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              encoding: "base64",
            },
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
}