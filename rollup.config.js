import createDefaultConfig from '@open-wc/building-rollup/modern-config';
import copy from 'rollup-plugin-cpy';
import litcss from 'rollup-plugin-lit-css';

const config = createDefaultConfig({
  input: './src/index.html',
});

export default [
  {
    ...config,
    plugins: [
      ...config.plugins,
      copy({
        files: ['public/**'],
        dest: 'dist',
        options: {
          parents: true,
        },
      }),
      litcss({
        include: ['**/*.css'],
        uglify: true,
      }),
    ],
  },
];
