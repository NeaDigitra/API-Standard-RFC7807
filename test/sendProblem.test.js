const sendProblem = require('../src/utils/sendProblem')
const httpMocks = require('node-mocks-http')

test('should return RFC7807 validation error response', () => {
  const response = httpMocks.createResponse()
  sendProblem(response, 422, 'validation', 'Input invalid.', '/api/example', { email: ['Invalid'] })
  const data = response._getJSONData()
  expect(response.statusCode).toBe(422)
  expect(response.getHeader('Content-Type')).toMatch(/application\/json/)
  expect(data.type).toMatch(/validation$/)
  expect(data.title).toBe('Validation Failed')
  expect(data.detail).toBe('Input invalid.')
  expect(data.errors).toHaveProperty('email')
})