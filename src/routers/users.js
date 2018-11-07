'use strict'

const { Router } = require('helpers')

const router = Router.createRouter()

router.get('/', (req, res) => {
  res.send('Hello from route')
})

module.exports = router
