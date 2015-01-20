'use strict';

var typeOf = require('kind-of');
var filterKeys = require('filter-keys');
var filterValues = require('filter-values');
var sortObject = require('sort-object');
var extend = require('extend-shallow');

module.exports = function filterObject(o, patterns, options) {
  if (o == null) {
    throw new Error('filter-object expects an object');
  }

  if (patterns == null) return o;

  if (typeOf(patterns) === 'function') {
    return filterValues(o, patterns, options);
  }

  var keys = filterKeys(o, patterns, options);
  return sortObject(o, extend({keys: keys}, options));
};
