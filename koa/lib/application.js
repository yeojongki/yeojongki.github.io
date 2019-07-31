const http = require('http')
const Stream = require('stream')
const context = require('./context')
const request = require('./request')
const response = require('./response')

class Koa {
  constructor() {
    this.middleware = []
    this.context = Object.create(context)
    this.request = Object.create(request)
    this.response = Object.create(response)
  }

  use(fn) {
    this.middleware.push(fn)
    return this
  }

  listen(...args) {
    const server = http.createServer(this.callback())
    return server.listen(...args)
  }

  callback() {
    let fn = compose(this.middleware)
    return (req, res) => {
      const ctx = this.createContext(req, res)
      return this.handleRequest(ctx, fn)
    }
  }

  handleRequest = (ctx, fnMiddleware) => {
    ctx.res.statusCode = 404
    return fnMiddleware(ctx).then(() => respond(ctx))
  }

  createContext(req, res) {
    // 不直接用 context 等的原因是：
    // 防止更改 context 后 不影响原对象
    const context = Object.create(this.context)
    const request = (context.request = Object.create(this.request))
    const response = (context.response = Object.create(this.response))

    // 属性代理
    context.app = request.app = response.app = this
    context.req = request.req = response.req = req
    context.res = request.res = response.res = res

    request.ctx = response.ctx = context
    request.response = response

    response.request = request

    context.originalUrl = request.originalUrl = req.originalUrl
    context.state = {}
    return context
  }
}

/**
 * Response helper.
 */
function respond(ctx) {
  const { res } = ctx
  const code = ctx.status
  let body = ctx.body

  if (body === null) {
    if (ctx.httpVersionMajor >= 2) {
      body = String(code)
    } else {
      body = ctx.message || String(code)
    }
    return res.end(body)
  }

  if (Buffer.isBuffer(body) || typeof body === 'string') return res.end(body)
  if (body instanceof Stream) return body.pipe(res)

  // body: json
  body = JSON.stringify(body)
  res.end(body)
}

function compose(middleware) {
  return function(context, next) {
    // last called middleware
    let index = -1
    return dispatch(0)

    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]

      // 最后一个中间件调用了 `next`
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()

      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
}

module.exports = Koa
