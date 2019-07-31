const proto = {}

// ctx.url === ctx.request.url
function defineGetter(prop, key) {
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      return this[prop][key]
    }
  })
}

function defineSetter(prop, key) {
  Object.defineProperty(proto, key, {
    configurable: true,
    set(value) {
      this[prop][key] = value
    }
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body')
defineSetter('response', 'body')
module.exports = proto
