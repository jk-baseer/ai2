import path from 'node:path'

export default {
  input: path.resolve('src/main.jsx'),
  output: {
    dir: 'dist-rolldown',
    format: 'iife',
    name: 'App',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  jsx: 'react',
}
