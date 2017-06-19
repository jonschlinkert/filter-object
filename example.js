var filter = require('./');
console.log(filter({a: 'aaa', b: {c: {d: 'ddd', e: 'eee'}}, f: 'fff'}, ['!b']));
// I think this should return  { a: 'aaa', f: 'fff' }

console.log(filter({a: 'aaa', b: {c: {d: 'ddd', e: 'eee'}}, f: 'fff'}, ['b']));
// I think this should return  { b: { c: { d: 'ddd', e: 'eee' } } }

var res = filter({
  removeMe: 'now',
  foo: {
    bar: {
      hello: 'hello',
      there: 'there'
    }
  },
  foosiz: 'to-remove'
}, ['foo.*']);
console.log(res)


console.log(filter({a: 'a', b: 'b', c: 'c'}, '*'));
//=> {a: 'a', b: 'b', c: 'c'}

console.log(filter({a: 'a', b: 'b', c: 'c'}, 'b'));
//=> {b: 'b'}

console.log(filter({foo: 'a', bar: 'b', baz: 'c'}, 'b*'));
//=> {bar: 'b', baz: 'c'}

console.log(filter({a: 'a', b: 'b', c: 'c'}, '{b,c}'));
//=> {b: 'b', c: 'c'}

console.log(filter({a: 'a', b: 'b', c: 'c'}, ['a', 'b']));
//=> {a: 'a', b: 'b'}

console.log(filter({foo: 'a', bar: 'b', baz: 'c'}, ['*', '!b*']));
//=> { foo: 'a' }

console.log(filter({foo: 'a', bar: 'b', baz: 'c'}, ['!b*']));
//=> { foo: 'a' }

console.log(filter({a: {b: {foo: 'a', bar: 'b', baz: 'c'}}}, ['!a.b.b*']));
//=> {a: {b: {foo: 'a'}}}
