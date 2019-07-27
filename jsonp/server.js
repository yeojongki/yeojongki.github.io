const http = require('http')
const url = require('url')

http
  .createServer((req, res) => {
    const parseURL = url.parse(req.url, true)
    const callback = parseURL.query && parseURL.query.callback
    if (callback) {
      res.end(`${callback}(${JSON.stringify(new Date())})`)
    }
  })
  .listen(3005, () => {
    console.log('server run at: http://localhost:3005')
  })
