const errorMap = require('../errorsMap')

/**
 * RFC7807 Problem Details Response  
 * Params: Response, Status, ErrorKey, Detail, Instance, Errors  
 */
function sendProblem(response, status, errorKey, detail = '', instance = '', errors = null) {
  const err = errorMap[errorKey] || { title: 'Error', status, detail: '', solution: '', example: {} }
  const type = `https://api.domain.com/errors/${errorKey}`
  return response.status(status).json({
    type,
    title: err.title,
    status,
    detail: detail || err.detail,
    instance,
    errors
  })
}

module.exports = sendProblem