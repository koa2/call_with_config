module.exports = function (path, options){
  console.log('favicon = ' + JSON.stringify(arguments));
  console.log('favicon path= ' + path)
  console.dir(options)

  return JSON.stringify(arguments)
}
