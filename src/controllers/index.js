'use strict'

const MovesController = require('./moves')
const LearningController = require('./learning')

module.exports = {
  MovesController: new MovesController(),
  LearningController: new LearningController(),
}
