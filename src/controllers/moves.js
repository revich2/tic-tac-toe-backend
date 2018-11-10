'use strict'

const { DataTransformer } = require('../helpers')
const { modelService } = require('../services')

const ceilMap = [
  { row: 0, column: 0 },
  { row: 0, column: 1 },
  { row: 0, column: 2 },
  { row: 1, column: 0 },
  { row: 1, column: 1 },
  { row: 1, column: 2 },
  { row: 2, column: 0 },
  { row: 2, column: 1 },
  { row: 2, column: 2 },
]

class MovesController {
  async makeMove(req, res) {
    const { board } = req.query

    if (!board) {
      res.status(400)
    }

    const transformBoard = DataTransformer.boardToNeuroData(board)
    const resultCeil = await modelService.predict(transformBoard)

    res.status(200).json(ceilMap[resultCeil])
  }
}

module.exports = MovesController
