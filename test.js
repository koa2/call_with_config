import test from 'ava';
var fs = require('fs')
var exec = require('co-exec');

test('a', function * (t) {
  var result = yield exec('node a.js');
  // path, options
  // favicon = {"0":"sss"}
  // favicon path= sss
  // undefined
  // '{"0":"sss"}'
  t.regex(result, /favicon\spath=\ssss/);
  t.regex(result, /path,\soptions/);
});

test('b', function * (t) {
  var result = yield exec('node b.js');
  // path, options
  // favicon = {}
  // favicon path= undefined
  // undefined
  // '{}'
  t.regex(result, /path,\soptions/);
});


test('c', function * (t) {
  var result = yield exec('node c.js');
  // path, options
  // '(ctx, next) => {\n      if (\'/favicon.ico\' != ctx.path) {\n        return next();\n      }\n    }'
  t.regex(result, /path,\soptions/);
  t.regex(result, /(ctx,\snext)/);
});


test('d', function * (t) {
  var result = yield exec('node d.js');
  // path, options
  // '(ctx, next) => {\n    if (\'/favicon.ico\' != ctx.path) {\n      return next();\n    }\n\n    if (\'GET\' !== ctx.method && \'HEAD\' !== ctx.method) {\n      ctx.status = \'OPTIONS\' == ctx.method ? 200 : 405;\n      ctx.set(\'Allow\', \'GET, HEAD, OPTIONS\');\n    } else {\n      // lazily read the icon\n      if (!icon) icon = fs.readFileSync(path);\n      ctx.set(\'Cache-Control\', cacheControl);\n      ctx.type = \'image/x-icon\';\n      ctx.body = icon;\n    }\n  }'
  t.regex(result, /path,\soptions/);
  t.regex(result, /favicon\.ico/);
});

