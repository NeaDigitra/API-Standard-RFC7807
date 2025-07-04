const errorMap = require('../errorsMap')

/**
 * Generate Error HTML Page  
 * Params: ErrorKey  
 */
function errorDocPage(errorKey) {
  const err = errorMap[errorKey]
  if (!(err)) { return null }
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${err.title} - ${err.status}</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <style>
        body { font-family: sans-serif; max-width: 500px; margin: 40px auto; }
        pre { background: #f6f8fa; padding: 12px; border-radius: 4px; }
      </style>
    </head>
    <body>
      <h1>${err.title} <span style="font-size:16px;color:#888">(${err.status})</span></h1>
      <p><b>Description:</b> ${err.detail}</p>
      <p><b>Solution:</b> ${err.solution}</p>
      <h3>Example Response:</h3>
      <pre>${JSON.stringify(err.example, null, 2)}</pre>
    </body>
  </html>
  `
}

module.exports = errorDocPage