'use strict'

const { Router } = require('helpers')

const router = Router.createRouter()

router.all('/', (req, res) => res.send('¯\\_(ツ)_/¯'))

router.use('/moves', require('./moves'))
router.use('/learning', require('./learning'))

module.exports = router
