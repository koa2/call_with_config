var call_with_config = require('.')

var favicon = require('koa-favicon')

// console.log(favicon.toString())

var r = call_with_config('koa-favicon', {
  'koa-favicon':{
    'path': 'sss',
    'options': {
      'maxAge': 1
    }
  },
  'favicon':{
    'path': 'sss'
  },
  'empty-favicon':{
    
  }
});


console.dir(r.toString())