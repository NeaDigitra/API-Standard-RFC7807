const express = require('express')
const exampleRouter = require('./routes/index')
const errorDocRouter = require('./routes/errors')

/**
 * Express App Entrypoint  
 */
function createApp() {
  const app = express()
  app.use(express.json())
  app.use('/api', exampleRouter)
  app.use('/errors', errorDocRouter)
  return app
}

/**
 * Start the Express App
 */
const appInstance = createApp()
const portNumber = process.env.APP_PORT || 3000
appInstance.listen(portNumber)