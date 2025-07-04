const express = require('express')

/**
 * Example API Router  
 */
function createExampleRouter() {
  const router = express.Router()
  router.get('/example', (req, res) => {
    if (!(req.query.email)) {
      return require('../utils/sendProblem')(res, 422, 'validation', 'Email is required.', req.originalUrl, { email: ['Email is required.'] })
    }
    return require('../utils/sendSuccess')(res, { email: req.query.email }, 'OK')
  })
  return router
}

module.exports = createExampleRouter()