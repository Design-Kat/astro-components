import createDefaultConfig from '@open-wc/building-rollup/modern-config';
import copy from 'rollup-plugin-cpy';
import litcss from 'rollup-plugin-lit-css';
// import multiInput from 'rollup-plugin-multi-input';
import htmlEntry from 'rollup-plugin-html-entry';

const config = createDefaultConfig({
  input: './src/index.html',
});

export default [
  {
    ...config,
    plugins: [
      ...config.plugins,
      htmlEntry(),
      copy([
        { files: 'src/css/*.css', dest: './dist/css' },
        { files: 'src/fonts/**', dest: './dist/fonts' },
        { files: 'src/img/**/*', dest: './dist/img' },
        { files: 'src/favicon.ico', dest: './dist' },
      ]),
      litcss({
        include: ['**/*.css'],
        uglify: true,
      }),
    ],
  },
];
