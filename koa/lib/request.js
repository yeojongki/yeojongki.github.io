const url = require('url')

module.exports = {
  get header() {
    return this.req.headers
  },

  set header(val) {
    this.req.headers = val
  },

  // 通过 ctx.request.url 取值
  get url() {
    return this.req.url
  },

  get path() {
    return url.parse(this.req.url).pathname
  },

  get query() {
    return url.parse(this.req.url).query
  }
}
