'use strict';

var filterValues = require('filter-values');
var isObject = require('isobject');
var glob = require('glob-object');

module.exports = function(obj, patterns, options) {
  if (!isObject(obj)) {
    throw new TypeError('expected an object');
  }

  if (!patterns) {
    return obj;
  }

  if (typeof patterns === 'function') {
    return filterValues(obj, patterns, options);
  }

  return glob(patterns, obj, options);
};
