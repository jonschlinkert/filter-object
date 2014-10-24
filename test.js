/*!
 * filter-object <https://github.com/jonschlinkert/filter-object>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var filter = require('./');

describe('filter', function () {
  it('should filter keys using the given glob patterns', function () {
    filter({a: 'a', b: 'b', c: 'c'}, '*').should.eql({a: 'a', b: 'b', c: 'c'});
    filter({a: 'a', b: 'b', c: 'c'}, 'b').should.eql({b: 'b'});
    filter({foo: 'a', bar: 'b', baz: 'c'}, 'b*').should.eql({bar: 'b', baz: 'c'});
  });

  it('should exclude keys that match negation patterns:', function () {
    filter({a: 'a', b: 'b', c: 'c'}, ['*', '!a']).should.eql({b: 'b', c: 'c'});
    filter({foo: 'a', bar: 'b', baz: 'c'}, ['*', '!b*']).should.eql({foo: 'a'});
  });

  it('should filter keys using brace expansion', function () {
    filter({a: 'a', b: 'b', c: 'c'}, '{b,c}').should.eql({b: 'b', c: 'c'});
  });

  it('should return the entire object if no pattern is given:', function () {
    filter({a: 'a', b: 'b', c: 'c'}).should.eql({a: 'a', b: 'b', c: 'c'});
  });

  it('should throw an error if an object is not passed:', function () {
    (function () {
      filter()
    }).should.throw('filter-object expects an object');
  });
});
