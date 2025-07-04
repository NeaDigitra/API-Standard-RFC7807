require('dotenv').config({ debug: process.env.APP_DEBUG })

module.exports = {
  errorBaseUrl: process.env.ERROR_BASE_URL || 'https://api.domain.com/errors'
}