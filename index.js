'use strict'

const FN_NAME = /function\s*(\w*)/i
const FN_ARGS = /^(function)?\s*\*?\s*[^\(]*\(\s*([^\)]*)\)/m
const FN_ARG_SPLIT = /,/
const FN_ARG = /^\s*(_?)(\S+?)\1\s*$/
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg

/**
 * Module dependencies.
 */

const debug = require('debug')('call_with_config')

/**
 * Prototype.
 */

module.exports = function (fn, config, single) {
  debug('call_with_config = ' + JSON.stringify(arguments))
  const fnText = fn.toString()
  const argDecl = fnText.replace(STRIP_COMMENTS, '').match(FN_ARGS)

  let _arg = []
  let p = config

  if (single) {
    let _name = FN_NAME.exec(fnText)[1]
    p = p[_name]
  }

  argDecl[2].split(FN_ARG_SPLIT).forEach(function (arg) {
    debug(arg)
    arg.replace(FN_ARG, function (all, underscore, name) {
      if (p[name]) {
        _arg.push(p[name])
      }
    })
  })

  return fn.apply(null, _arg)
}
