# call_with_config

call funtion with config(json object)

[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/i5ting/call_with_config?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://img.shields.io/npm/v/call_with_config.svg?style=flat-square)](https://www.npmjs.com/package/call_with_config)
[![Build](https://travis-ci.org/i5ting/call_with_config.svg?branch=master)](https://travis-ci.org/i5ting/call_with_config)
[![codecov.io](https://codecov.io/github/i5ting/call_with_config/coverage.svg?branch=master)](https://codecov.io/github/i5ting/call_with_config?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install 

```
$ npm i -S call_with_config@2
```

## API

> call_with_config(key, config, cumtomKey)

- key = module name or local module
- config for param
- if cumtomKey exist, load config from config[cumtomKey]

## Usages

```
var call_with_config = require('.')

var r = call_with_config('./favicon', {
  './favicon':{
    'path': 'sss'
  },
  'empty-favicon':{
    
  }
});

console.dir(r.toString())
```

or

```
var call_with_config = require('.')

var r = call_with_config('koa-favicon', {
  'koa-favicon':{
    'path': 'sss',
    'options': {
      'maxAge': 1
    }
  }
});

console.dir(r.toString())

```