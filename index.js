'use strict'

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

module.exports = function (key, config, cumtomKey) {
  debug('call_with_config = ' + JSON.stringify(arguments))

  const fn = require(key)
  const fnText = fn.toString()
  const argDecl = fnText.replace(STRIP_COMMENTS, '').match(FN_ARGS)

  let _arg = []
  let p = config

  if (cumtomKey) {
    p = p[cumtomKey]
  } else {
    p = p[key]
  }

  console.log(argDecl[2])

  argDecl[2].split(FN_ARG_SPLIT).forEach(function (arg) {
    debug(arg)
    arg.replace(FN_ARG, function (all, underscore, name) {
      if (p[name]) {
        _arg.push(p[name])
      }
    })
  })
  debug(_arg)

  return fn.apply(null, _arg)
}
