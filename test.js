/*!
 * filter-object <https://github.com/jonschlinkert/filter-object>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var filter = require('./');

describe('filter', function () {
  it('should use a filter function:', function () {
    var res = filter({a: 'a', b: 'b', c: 'c'}, function (val, key) {
      return key === 'b';
    });
    assert.deepEqual(res, {b: 'b'});
  });

  it('should filter keys using the given glob patterns', function () {
    assert.deepEqual(filter({a: 'a', b: 'b', c: 'c'}, '*'), {a: 'a', b: 'b', c: 'c'});
    assert.deepEqual(filter({a: 'a', b: 'b', c: 'c'}, 'b'), {b: 'b'});
    assert.deepEqual(filter({foo: 'a', bar: 'b', baz: 'c'}, 'b*'), {bar: 'b', baz: 'c'});
  });

  it('should exclude keys that match negation patterns:', function () {
    assert.deepEqual(filter({a: 'a', b: 'b', c: 'c'}, ['*', '!a']), {b: 'b', c: 'c'});
    assert.deepEqual(filter({foo: 'a', bar: 'b', baz: 'c'}, ['*', '!b*']), {foo: 'a'});
  });

  it('should filter keys using brace expansion', function () {
    assert.deepEqual(filter({a: 'a', b: 'b', c: 'c'}, '{b,c}'), {b: 'b', c: 'c'});
  });

  it('should return the entire object if no pattern is given:', function () {
    assert.deepEqual(filter({a: 'a', b: 'b', c: 'c'}), {a: 'a', b: 'b', c: 'c'});
  });
});
