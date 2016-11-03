/* eslint-disable import/no-extraneous-dependencies, arrow-body-style, no-console */

import gulp from 'gulp'
import babel from 'gulp-babel'
import del from 'del'
import eslint from 'gulp-eslint'
import webpack from 'webpack-stream'
import mocha from 'gulp-mocha'
import flow from 'gulp-flowtype'
import postcss from 'gulp-postcss'
import sourcemaps from 'gulp-sourcemaps'
import cssnext from 'postcss-cssnext'
import webpackConfig from './webpack.config.babel'

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  serverSrcJs: 'src/server/**/*.js?(x)',
  sharedSrcJs: 'src/shared/**/*.js?(x)',
  clientEntryPoint: 'src/client/app.jsx',
  gulpFile: 'gulpfile.babel.js',
  webpackFile: 'webpack.config.babel.js',
  libDir: 'lib',
  distDir: 'dist',
  clientBundle: 'dist/client-bundle.js?(.map)',
  allLibTests: 'lib/test/**/*.js',
  allSrcCss: 'src/**/*.css',
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
    .pipe(gulp.dest(paths.distDir))
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
    .pipe(mocha())
)

gulp.task('css', () => {
  const allCssPlugins = [
    cssnext,
  ]
  return gulp.src(paths.allSrcCss)
    .pipe(sourcemaps.init())
    .pipe(postcss(allCssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.libDir))
})