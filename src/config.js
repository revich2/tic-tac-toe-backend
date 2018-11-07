'use strict'

const env = require('dotenv').config()
require('dotenv-expand')(env)

module.exports = {
  server: {
    port: process.env.PORT,
  },
  db: {
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
}
