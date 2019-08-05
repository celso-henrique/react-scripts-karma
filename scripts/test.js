'use strict'

process.env.NODE_ENV = 'test'

const Server = require('karma').Server
const createKarmaConfig = require('./utils/createKarmaConfig')

const karmaConfig = createKarmaConfig()

const server = new Server(karmaConfig, exitCode => {
  process.exit(exitCode)
})

server.start()
