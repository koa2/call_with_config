var call_with_config = require('.')

var favicon = require('./favicon')

// console.log(favicon.toString())

var r = call_with_config('./favicon', {
  './favicon':{
    'path': 'sss'
  },
  'empty-favicon':{
    
  }
}, 'empty-favicon');


console.dir(r.toString())