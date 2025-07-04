/**
 * Standard Success Response  
 * Params: Response, Data, Message, Status  
 */
function sendSuccess(response, data = null, message = 'OK', status = 200) {
  return response.status(status).json({
    status,
    data,
    message
  })
}

module.exports = sendSuccess