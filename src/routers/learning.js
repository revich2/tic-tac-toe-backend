'use strict'

const { Router } = require('helpers')

const { LearningController } = require('../controllers')

const router = Router.createRouter()

router.post('/history-of-game', LearningController.trainOnNewGame)

module.exports = router
