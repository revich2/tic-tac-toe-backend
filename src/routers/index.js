'use strict'

const { Router } = require('helpers')

const router = Router.createRouter()

router.all('/', (req, res) => res.send('¯\\_(ツ)_/¯'))

router.use('/users', require('./users'))

module.exports = router
