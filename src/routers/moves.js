'use strict'

const { Router } = require('helpers')

const { MovesController } = require('../controllers')

const router = Router.createRouter()

router.get('/make-move', MovesController.makeMove)

module.exports = router
