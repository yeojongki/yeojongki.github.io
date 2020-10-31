// Promise A+ https://www.ituring.com.cn/article/66566

function isFn(f) {
  return typeof f === 'function'
}

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  value = undefined
  reason = undefined
  status = PENDING

  onFulfilledCallbacks = []
  onRejectedCallbacks = []

  constructor(executor) {
    if (!(this instanceof Promise)) {
      throw new TypeError('undefined is not a promise')
    }

    if (!(isFn(executor))) {
      throw new TypeError(`Promise resolver ${executor} is not a function`)
    }

    try {
      executor(value => {
        if (this.status !== PENDING) return
        setTimeout(() => {
          this.value = value
          this.status = FULFILLED
          this.onFulfilledCallbacks.forEach(cb => cb())
        })
      }, reason => {
        if (this.status !== PENDING) return
        setTimeout(() => {
          this.reason = reason
          this.status = REJECTED
          this.onRejectedCallbacks.forEach(cb => cb())
        })
      })
    } catch (error) {
      _reject(error)
    }
  }

  then = (onFulfilled, onRejected) => {
    if (!isFn(onFulfilled)) {
      onFulfilled = v => v
    }
    if (!isFn(onRejected)) {
      onRejected = reason => {
        throw reason
      }
    }

    const promise2 = new Promise((resolve, reject) => {
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            const x = onFulfilled(this.value)
            this._resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            const x = onRejected(this.reason)
            this._resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }

      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            this._resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            this._resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
    })

    return promise2
  }

  _resolvePromise = (promise2, x, resolve, reject) => {
    let called = false

    if (promise2 === x) {
      throw new TypeError('Chaining cycle detected for promise #<Promise>')
    }

    if (x instanceof Promise) {
      if (x.status === PENDING) {
        x.then(y => {
          this._resolvePromise(promise2, y, resolve, reject)
        }, reason => {
          reject(reason)
        })
      } else {
        x.then(resolve, reject)
      }
    } else if (x !== null && (typeof x === 'object' || isFn(x))) {
      try {
        const { then } = x
        if (isFn(then)) {
          then.call(x, y => {
            if (called) return
            called = true
            this._resolvePromise(promise2, y, resolve, reject)
          }, r => {
            if (called) return
            called = true
            reject(r)
          })
        } else {
          resolve(x)
        }
      } catch (error) {
        if (called) return
        called = true
        reject(error)
      }
    } else {
      resolve(x)
    }
  }


  catch = onRejected => {
    return this.then(null, onRejected)
  }
}

Promise.deferred = function () {
  const defer = {}
  defer.promise = new Promise((resolve, reject) => {
    defer.resolve = resolve
    defer.reject = reject
  })
  return defer
}

module.exports = Promise
