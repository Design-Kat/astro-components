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

function color() {
  return gulp
    .src('./src/css/src/common/__variables.css')
    .pipe(postcss([postcssColor()]))
    .pipe(rename('_variables.css'))
    .pipe(gulp.dest('./src/css/src/common'));
}

function test() {
  return gulp;
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

function clean() {
  return del(['./dist/']);
}

function watch() {
  // build site
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

// gulp.task('css', gulp.series('concatCoreCss', 'concatAllCss'));
// const css = gulp.series(concatCoreCss);
// const watch = gulp.series(watchFiles);
const start = gulp.series(clean, build, browserSync, watch);

exports.css = css;
exports.color = color;
exports.watch = watch;
exports.build = build;
exports.start = start;
exports.clean = clean;
exports.test = test;
