const sendSuccess = require('../src/utils/sendSuccess')
const httpMocks = require('node-mocks-http')

test('should return success response with data', () => {
  const response = httpMocks.createResponse()
  sendSuccess(response, { test: true }, 'Success')
  const data = response._getJSONData()
  expect(response.statusCode).toBe(200)
  expect(data.status).toBe(200)
  expect(data.message).toBe('Success')
  expect(data.data.test).toBe(true)
})