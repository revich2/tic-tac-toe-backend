'use strict'

const tf = require('@tensorflow/tfjs')
require('@tensorflow/tfjs-node')

const NNModelService = require('./NNModelService')
const modelService = new NNModelService(tf)

module.exports = {
  modelService,
}
