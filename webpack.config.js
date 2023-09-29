const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    'index': './src/index.ts',
    'collections/basic': './src/collections/basic/index.ts',
    'collections/networking': './src/collections/networking/index.ts',
    'collections/aws': './src/collections/aws/index.ts',
    'collections/kubernetes': './src/collections/kubernetes/index.ts',
    'collections/azure': './src/collections/azure/index.ts',
    'collections/gcp': './src/collections/gcp/index.ts'
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
        ]
      }
    ]
  },
}