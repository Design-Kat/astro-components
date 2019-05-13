const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat-css-import');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const postcssColor = require('postcss-color-mod-function');
const del = require('del');
const rollup = require('rollup');
const createDefaultConfig = require('@open-wc/building-rollup/modern-config');
const litcss = require('rollup-plugin-lit-css');
const copy = require('rollup-plugin-cpy');
const gulpif = require('gulp-if');
const properties = require('postcss-custom-properties');
const autoprefixer = require('gulp-autoprefixer');

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './dist/',
    },
    port: 3000,
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

/*  
* * Rather than making Webpack/Rollup do double duty as a task
* * runner and a build tool, the current toolchain treats the
* * build as just another task. Neither WebPack or Rollup were
* * well suited to handling image minification/css concatenation
* * etc …

* * This build process takes the index.html as the entry point
* * moves all "static" files and directories to a generated
* * dist directory; imports external CSS and then writes an 
* * optimized JS bundle and entry point HTML document along with
* * source maps
*/

function build() {
  const config = createDefaultConfig({
    input: './src/index.html',
  });

  return rollup
    .rollup({
      ...config,
      plugins: [
        ...config.plugins,
        copy([
          { files: 'src/css/*.css', dest: './dist/css' },
          { files: 'src/fonts/**', dest: './dist/fonts' },
          { files: 'src/img/**/*', dest: './dist/img' },
          { files: 'src/icons/**/*', dest: './dist/icons' },
          { files: 'src/favicon.ico', dest: './dist' },
        ]),
        litcss({
          include: ['**/*.css'],
          uglify: true,
        }),
      ],
    })
    .then(bundle =>
      bundle.write({
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
      }),
    );
}

/*
 * * The color method handles the generation of the tint/shade
 * * color palettes using the CSS4 color-mod function (no longer)
 * * part of the spec. It takes a base color and increases the
 * * tint or shade by 20% increments
 */
function color() {
  return gulp
    .src('./src/css/src/common/__variables.css')
    .pipe(postcss([postcssColor()]))
    .pipe(rename('_variables.css'))
    .pipe(gulp.dest('./src/css/src/common'));
}

function css() {
  const condition = file => file !== 'astro.css';

  return gulp
    .src('./src/css/src/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat({ inlineImports: true }))
    .pipe(gulpif(condition, postcss([properties()])))
    .pipe(gulpif(condition, autoprefixer({ browsers: 'last 2 versions' })))
    .pipe(gulp.dest('src/css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(gulp.dest('src/css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'));
}

/*
 * * Cleans the distribution folder before building
 */
function clean() {
  return del(['./dist/']);
}

/*
 * * Handles watching for file changes and triggering a browser reload
 * TODO: implement BrowserSync.stream for CSS changes to inject rather
 * than reload browser
 */
function watch() {
  // build the site if anything in /src changes except fonts, imgs, css
  // css is handled by the css watcher
  gulp.watch(
    './src/**/*',
    {
      ignored: ['./src/fonts', './src/img', './src/css'],
    },
    gulp.series(build, browserSyncReload),
  );

  // watch for color changes and generate palette
  gulp.watch('./src/css/src/common/__variables.css', gulp.series('color'));

  // compile and minify css
  gulp.watch(
    './src/css/src/**/*.css',
    {
      ignored: [
        './src/css/src/common/__variables.css',
        './src/css/src/astro.core.css',
        './src/css/src/astro.css',
      ],
    },
    gulp.series(css, browserSyncReload),
  );
}

const start = gulp.series(clean, build, browserSync, watch);
const dev = gulp.series(clean, build, watch);

exports.css = css;
exports.color = color;
exports.watch = watch;
exports.build = build;
exports.start = start;
exports.dev = dev;
exports.clean = clean;
