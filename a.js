var call_with_config = require('.')

var favicon = require('./favicon')

// console.log(favicon.toString())

var r = call_with_config('./favicon', {
  'koa-favicon':{
    'path': 'sss',
    'options': {
      'maxAge': 1
    }
  },
  './favicon':{
    'path': 'sss'
  },
  'empty-favicon':{
    
  }
});


console.dir(r.toString())