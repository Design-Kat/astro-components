import createDefaultConfig from '@open-wc/building-rollup/modern-config';
import copy from 'rollup-plugin-cpy';
import litcss from 'rollup-plugin-lit-css';

const config = createDefaultConfig({
  input: './src/index.html',
});

export default [
  // add plugin to the first config
  {
    ...config,
    plugins: [
      ...config.plugins,
      copy({
        // copy over all images files
        files: ['public/**/*'],
        dest: 'dist',
        options: {
          // parents makes sure to preserve the original folder structure
          parents: true,
          verbose: true,
        },
      }),
      litcss({
        include: ['**/*.css'],
        uglify: true,
      }),
    ],
  },

  // leave the second config untouched
];
