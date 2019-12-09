import { join } from 'path';

const context = join(__dirname, 'src');

export default {
  context,
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'numbers',
  },
  devtool: 'source-map',
  module: {
  },
};
