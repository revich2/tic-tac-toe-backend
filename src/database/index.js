'use strict'

const Sequelize = require('sequelize')

const config = require('config')

const models = require('./models')

class Database {
  constructor(host, database, user, password) {
    this._sequelize = new Sequelize(database, user, password, {
      host,
      dialect: 'postgres',
    })

    this._models = {}
  }

  initialize() {
    models.forEach(model => {
      this._models[model.name] = model.init(this._sequelize)
    })

    Object.keys(this._models).forEach(modelName => {
      if (typeof this._models[modelName].associate === 'function') {
        this._models[modelName].associate(this._models)
      }
    })
  }

  testConnection() {
    return this._sequelize.authenticate()
  }

  sync(options) {
    return this._sequelize.sync(options)
  }

  get Models() {
    return this._models
  }
}

module.exports = new Database(config.db.host, config.db.database, config.db.username, config.db.password)
