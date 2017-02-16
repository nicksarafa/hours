/* eslint-disable import/no-extraneous-dependencies, arrow-body-style, no-console, no-multi-spaces, max-len */

import autoprefixer  from 'autoprefixer'
import babel         from 'gulp-babel'
import cssnext       from 'postcss-cssnext'
import cssnano       from 'cssnano'
import del           from 'del'
import eslint        from 'gulp-eslint'
import flow          from 'gulp-flowtype'
import gulp          from 'gulp'
import mocha         from 'gulp-mocha'
import postcss       from 'gulp-postcss'
import precss        from 'precss'
import sourcemaps    from 'gulp-sourcemaps'
import stylelint     from 'stylelint'
import webpack       from 'webpack-stream'
import webpackConfig from './webpack.config.babel'

const paths = {
  allLibTests: 'lib/test/**/*.js',
  allSrcCss: 'src/**/*.css',
  allSrcJs: 'src/**/*.js?(x)',
  clientBundle: 'dist/client-bundle.js?(.map)',
  clientEntryPoint: 'src/client/app.jsx',
  distDir: 'dist',
  gulpFile: 'gulpfile.babel.js',
  libDir: 'lib',
  serverSrcJs: 'src/server/**/*.js?(x)',
  sharedSrcJs: 'src/shared/**/*.js?(x)',
  webpackFile: 'webpack.config.babel.js',
}

gulp.task('clean', () => del([
  paths.libDir,
  paths.clientBundle,
]))

gulp.task('build', ['lint', 'clean'], () => {
  return gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
})

gulp.task('main', ['test'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir)),
)

gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main'])
  gulp.watch(paths.allSrcCss, ['css'])
})

gulp.task('default', ['watch', 'main'])

gulp.task('lint', () => {
  return gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(flow({ abort: true }))
})

gulp.task('test', ['build'], () =>
  gulp.src(paths.allLibTests)
    .pipe(mocha()),
)

/**
 * List other imported postcss plugins here
 * PostCSS Assets - asset paths (cache buster too)
 * React Inline - inline styles for AMP site later https://github.com/martinandert/react-inline
 */
gulp.task('css', () => {
  const allCssPlugins = [
    autoprefixer,
    cssnano,
    cssnext,
    precss,
    stylelint,
  ]
  return gulp.src(paths.allSrcCss)
    .pipe(sourcemaps.init())
    .pipe(postcss(allCssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.libDir))
})
