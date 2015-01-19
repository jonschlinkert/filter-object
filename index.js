'use strict';

var filterKeys = require('filter-keys');
var sortObject = require('sort-object');
var extend = require('extend-shallow');

module.exports = function filterObject(o, patterns, options) {
  if (o == null) {
    throw new Error('filter-object expects an object');
  }

  if (patterns == nul) return o;

  var keys = filterKeys(o, patterns, options);
  return sortObject(o, extend({keys: keys}, options));
};
