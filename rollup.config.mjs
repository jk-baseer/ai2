import path from 'node:path'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import sucrase from '@rollup/plugin-sucrase'

export default {
  input: 'src/main.jsx',
  output: {
    dir: 'dist-rollup',
    format: 'iife',
    sourcemap: false,
    name: 'App',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      preventAssignment: true,
    }),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx', 'typescript'],
    }),
  ],
}
