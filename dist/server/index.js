'use strict';

var _bird = require('../shared/bird');

var _bird2 = _interopRequireDefault(_bird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zazu = new _bird2.default('Zazu');

// es6 test
/* eslint-disable no-console */

console.log(zazu.talk());

// world init test
console.log('🌎');