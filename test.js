import test from 'ava';
var fs = require('fs')
var exec = require('co-exec');

test('function call_with_config(fn, config)', function * (t) {
  var result = yield exec('node a.js');
  //
  // favicon = {"0":"sss","1":{"maxAge":1}}
  // favicon path= sss
  // { maxAge: 1 }
  t.regex(result, /favicon\spath=\ssss/);
  t.regex(result, /{\smaxAge:\s1\s}/);
});

test('function call_with_config(fn, config, single)', function * (t) {
  var result = yield exec('node b.js');
  //
  // favicon = {"0":"sss","1":{"maxAge":1}}
  // favicon path= sss
  // { maxAge: 1 }
  t.regex(result, /favicon\spath=\ssss/);
  t.regex(result, /{\smaxAge:\s1\s}/);
});