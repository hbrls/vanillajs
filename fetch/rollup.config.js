import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';


const external = [
  'core-js/modules/es.date.to-json.js',
  'core-js/modules/es.object.to-string.js',
  'core-js/modules/es.promise.js',
  'core-js/modules/web.url.to-json.js',
  'core-js/modules/es.array.join.js',
  'core-js/modules/es.array.map.js',
  'core-js/modules/es.object.keys.js',
];


export default [
  {
    input: 'src/get.js',

    external,

    plugins: [
      eslint(),

      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'get.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/post.js',

    external,

    plugins: [
      eslint(),

      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'post.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/put.js',

    external,

    plugins: [
      eslint(),

      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'put.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/del.js',

    external,

    plugins: [
      eslint(),

      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'del.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/text.js',

    external,

    plugins: [
      eslint(),

      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'text.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/index.js',

    external,

    plugins: [
      eslint(),

      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'index.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/axios.js',

    external: [ 'axios', ...external ],

    plugins: [
      eslint(),

      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],

    output: { dir: '.', entryFileNames: 'axios.js', format: 'cjs', exports: 'default' },
  },
];
