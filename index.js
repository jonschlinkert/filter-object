'use strict';

var filterKeys = require('filter-keys');
var sortObject = require('sort-object');


module.exports = function filterObject(o, patterns) {
  if (o == null) {
    throw new Error('filter-object expects an object');
  }

  if (arguments.length === 1) {
    return o;
  }

  return sortObject(o, filterKeys(o, patterns));
};
