'use strict'

const express = require('express')

const morgan = require('morgan')
const bodyParser = require('body-parser')

const routers = require('routers')
const database = require('database')

class Application {
  constructor() {
    this._app = express()
  }

  expressInitialize(app) {
    return new Promise(resolve => {
      app.use(morgan('common'))

      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({ extended: false }))

      app.use(routers)

      resolve()
    })
  }

  initialize() {
    return this.expressInitialize(this._app)
      .then(() => database.testConnection())
      .then(() => database.initialize())
      .then(() => database.sync())
      .then(() => this._app)
  }
}

module.exports = Application
