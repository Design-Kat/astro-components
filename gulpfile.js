const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat-css-import');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const del = require('del');
const rollup = require('rollup');
const createDefaultConfig = require('@open-wc/building-rollup/modern-config');
const litcss = require('rollup-plugin-lit-css');
const copy = require('rollup-plugin-cpy');

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

  console.log(config);

  return rollup
    .rollup({
      ...config,
      plugins: [
        ...config.plugins,
        copy([
          { files: 'src/css/*.css', dest: './dist/css' },
          { files: 'src/fonts/**', dest: './dist/fonts' },
          { files: 'src/img/**/*', dest: './dist/img' },
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

function css() {
  return gulp
    .src('./src/css/src/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat({ isCompress: false }))
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

function watchFiles() {
  // build site
  gulp.watch(
    './src/**/*',
    { ignored: ['./src/fonts', './src/img', './src/css'] },
    gulp.series(build, browserSyncReload),
  );

  // compile and minify css
  gulp.watch(
    './src/css/src/**/*.css',
    { ignored: ['./src/css/src/astro.core.css', './src/css/src/astro.css'] },
    gulp.series(css),
  );
}

// gulp.task('css', gulp.series('concatCoreCss', 'concatAllCss'));
// const css = gulp.series(concatCoreCss);
const watch = gulp.parallel(watchFiles, browserSync);
const generate = gulp.series(clean, watch, gulp.parallel(css, build));
const start = gulp.series(clean, build, watch);

exports.css = css;
exports.watch = watch;
exports.build = build;
exports.start = start;
exports.clean = clean;
exports.generate = generate;
