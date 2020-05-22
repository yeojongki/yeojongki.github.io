const http = require('http')
const url = require('url')

http
  .createServer((req, res) => {
    const { path } = url.parse(req.url, true)
    if (path === '/api/date') {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
      res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
      setTimeout(() => {
        res.end(JSON.stringify(new Date()))
      }, 1000);
    }
  })
  .listen(3005, () => {
    console.log('server run at: http://localhost:3005')
  })
