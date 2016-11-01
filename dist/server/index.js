'use strict';

var _test = require('../shared/test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dave = new _test2.default('Dave');

// es6 test
/* eslint-disable no-console */

console.log(dave.output());

// world init test
console.log('🌎');