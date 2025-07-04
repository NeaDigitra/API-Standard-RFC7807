const errorMap = require('../errorsMap')

/**
 * Escape HTML Special Characters  
 * Params: InputString
 */
function escapeHtml(inputString) {
  if (typeof inputString !== 'string') {
    return ''
  }
  const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }
  return inputString.replace(/[&<>"']/g, (char) => {
    return escapeMap[char]
  })
}

/**
 * Generate Error HTML Page  
 * Params: ErrorKey
 */
function errorDocPage(errorKey) {
  const errorData = errorMap[errorKey]
  if (!(errorData)) {
    return null
  }
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>${escapeHtml(errorData.title)} - ${escapeHtml(String(errorData.status))}</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <style>
        body { font-family: sans-serif; max-width: 500px; margin: 40px auto; }
        pre { background: #f6f8fa; padding: 12px; border-radius: 4px; }
      </style>
    </head>
    <body>
      <h1>${escapeHtml(errorData.title)} <span style="font-size:16px;color:#888">(${escapeHtml(String(errorData.status))})</span></h1>
      <p><b>Description:</b> ${escapeHtml(errorData.detail)}</p>
      <p><b>Solution:</b> ${escapeHtml(errorData.solution)}</p>
      <h3>Example Response:</h3>
      <pre>${escapeHtml(JSON.stringify(errorData.example, null, 2))}</pre>
    </body>
  </html>
  `
}

module.exports = errorDocPage