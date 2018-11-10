'use strict'

const { DataTransformer } = require('../helpers')
const { modelService } = require('../services')

class LearningController {
  async trainOnNewGame(req, res) {
    const { history, winner } = req.body

    if (winner === 1) {
      const { inputs, expected } = DataTransformer.historyToDataSet(history)

      await modelService.learnModel(inputs, expected, 30)

      // await modelService.saveModel(`file://${__dirname + '/../../model'}`)
    }
  }
}

module.exports = LearningController
