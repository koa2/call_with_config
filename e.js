var call_with_config = require('.')

var r = call_with_config('koa-favicon', {
  'koa-favicon': null
});

console.dir(r.toString())