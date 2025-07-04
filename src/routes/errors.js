const express = require('express')
const errorDocPage = require('../middleware/errorDocPage')

/**
 * Error Documentation Router  
 */
function createErrorDocRouter() {
  const router = express.Router()
  router.get('/:errorKey', (req, res) => {
    const html = errorDocPage(req.params.errorKey)
    if (!(html)) {
      return res.status(404).send('Error documentation not found.')
    }
    res.set('Content-Type', 'text/html').send(html)
  })
  return router
}

module.exports = createErrorDocRouter()