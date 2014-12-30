# filter-object [![NPM version](https://badge.fury.io/js/filter-object.svg)](http://badge.fury.io/js/filter-object)

> Return a copy of an object, filtered to have only keys that match the given glob patterns.

## Install
## Install with [npm](npmjs.org)

```bash
npm i filter-object --save
```

## Usage

```js
var filter = require('filter-object');

filter({a: 'a', b: 'b', c: 'c'}, '*');
//=> {a: 'a', b: 'b', c: 'c'}

filter({a: 'a', b: 'b', c: 'c'}, 'b');
//=> {b: 'b'}

filter({foo: 'a', bar: 'b', baz: 'c'}, 'b*');
//=> {bar: 'b', baz: 'c'}

filter({a: 'a', b: 'b', c: 'c'}, '{b,c}');
//=> {b: 'b', c: 'c'}
```

Negation patterns work as well:

```js
filter({foo: 'a', bar: 'b', baz: 'c'}, ['*', '!b*']);
//=> {foo: 'a'}
```

### options

Pass options to [sort-object]

```js
filter({foo: 'a', bar: 'b', baz: 'c'}, ['*', '!b*'], options);
```

See [sort-object] for the full range of options and features.


## Run tests

Install dev dependencies:

```bash
npm i -d && mocha
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/filter-object/issues).

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on December 30, 2014._

[sort-object]: https://github.com/helpers/sort-object