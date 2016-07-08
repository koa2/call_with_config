var call_with_config = require('.')

var r = call_with_config('./favicon', {
  './favicon':{
    'path': 'sss'
  },
  'empty-favicon':{
    
  }
});

console.dir(r.toString())