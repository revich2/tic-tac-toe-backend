'use strict'

const fs = require('fs')
const path = require('path')

const modelsPath = path.join(__dirname, '.')

module.exports = fs
  .readdirSync(modelsPath)
  .filter(file => file.indexOf('.') !== 0 && /\.js$/gi.test(file) && !/^index\.js$/gi.test(file))
  .map(file => require(path.join(modelsPath, file)))
