const express = require('express')
const sendProblem = require('../utils/sendProblem')
const sendSuccess = require('../utils/sendSuccess')

/**
 * Example API Router  
 */
function createExampleRouter() {
  const router = express.Router()
  router.get('/example', (req, res) => {
    if (!(req.query.email)) {
      return sendProblem(res, 422, 'validation', 'Email is required.', req.originalUrl, { email: ['Email is required.'] })
    }
    return sendSuccess(res, { email: req.query.email }, 'OK')
  })
  return router
}

module.exports = createExampleRouter()