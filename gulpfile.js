const gulp = require('gulp')
const babel = require('babel')
const del = require('del')
const exec = require('child_process').exec

const paths = {
  allSrcJs: 'src/**/*.js',
  libDir: 'lib',
}
