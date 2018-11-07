'use strict'

require('app-module-path/register')

const { ServerBuilder } = require('helpers')

const config = require('./config')

const Application = require('./app')
const app = new Application()

app
  .initialize()
  .then(app => {
    const serverBuilder = new ServerBuilder()

    serverBuilder.setPort(config.server.port)
    serverBuilder.setApp(app)

    const server = serverBuilder.build()

    return server.start()
  })
  .then(port => {
    console.log(`Server started on port ${port}`)
  })
