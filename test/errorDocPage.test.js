const errorDocPage = require('../src/middleware/errorDocPage')

test('should return HTML for known error key', () => {
  const html = errorDocPage('validation')
  expect(html).toMatch(/<!DOCTYPE html>/)
  expect(html).toMatch(/Validation Failed/)
})

test('should return null for unknown error key', () => {
  const html = errorDocPage('unknown')
  expect(html).toBeNull()
})