var call_with_config = require('.')

function favicon(path, options){
  console.log('favicon = ' + JSON.stringify(arguments));
  console.log('favicon path= ' + path)
  console.dir(options)
}

call_with_config(favicon, {
  favicon: {
    'path':'sss',
    'options': {
      'maxAge': 1
    }
  }
}, true);
