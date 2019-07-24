const express = require('express')
const serveStatic = require('serve-static')
const app = express()

app.use(
  serveStatic('public', {
    maxAge: '1d',
    setHeaders: setCustomCacheControl
  })
)
app.get('*', (req, res) => {
  if (req.path == '/favicon.ico') {
    res.end()
  } else {
    console.log('[Get]: ', req.path)
  }
})

function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
  if (serveStatic.mime.lookup(path) === 'application/javascript') {
    res.setHeader('Cache-Control', 'public, max-age=30')
  }
}

app.listen(process.env.PORT || 3004, () => {
  console.log(`server start: http://localhost:${process.env.PORT || 3004}/`)
})
