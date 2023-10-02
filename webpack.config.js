const path = require('path');

module.exports = () => {

 return {
  mode: 'production',
  target: 'web',
  entry: {
    'utils/index': './src/utils/index.ts',
    'isoflow': './src/generated/isoflow.ts',
    'aws': './src/generated/aws.ts',
    'azure': './src/generated/azure.ts',
    'gcp': './src/generated/gcp.ts',
    'kubernetes': './src/generated/kubernetes.ts'
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
      }
    ]
  },
}

}