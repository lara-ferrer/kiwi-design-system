import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import sucrase from '@rollup/plugin-sucrase';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/stories/components/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      sucrase({
        exclude: ['node_modules/**'],
        transforms: ['jsx'],
      }),
      external(),
      resolve(),
      terser(),
      nodeResolve(),
      commonjs({
        requireReturnsDefault: 'esmExternals'
      }),
    ]
  }
];