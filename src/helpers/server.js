'use strict'

const http = require('http')

const getPort = server => server.address().port

class Server {
  constructor(server, port, host) {
    this._server = server

    this._port = port
    this._host = host
  }

  start() {
    return new Promise(resolve => {
      this._server.listen(this._port, this._host, () => {
        resolve(getPort(this._server))
      })
    })
  }

  stop() {
    return new Promise((resolve, reject) => {
      this._server.close(err => {
        if (err) {
          reject()
        } else {
          resolve()
        }
      })
    })
  }
}

class ServerBuilder {
  constructor() {
    this._port = undefined
    this._host = undefined

    this._app = undefined

    this._listeners = {
      start: () => {},
      error: () => {},
    }
  }

  setPort(port) {
    this._port = port

    return this
  }

  setHost(host) {
    this._host = host

    return this
  }

  setApp(app) {
    this._app = app

    return this
  }

  setOnStartListener(callback) {
    this._listeners.start = callback

    return this
  }

  build() {
    const server = http.createServer(this._app)

    server.on('connection', socket => socket.setNoDelay(true))

    server.on('listening', () => {
      this._listeners.start(getPort(server))
    })

    server.on('error', err => {
      if (err.syscall !== 'listen') {
        throw err
      }

      const bind = `Port ${this._port}`

      switch (err.code) {
        case 'EACCES': {
          console.error(`${bind} requires elevated privileges`)
          process.exit(1)

          break
        }
        case 'EADDRINUSE': {
          console.error(`${bind} is already in use`)
          process.exit(1)

          break
        }
        default: {
          throw err
        }
      }
    })

    return new Server(server, this._port, this._host)
  }
}

module.exports = ServerBuilder
