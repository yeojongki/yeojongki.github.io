class CancelToken {
  static source() {
    let cancel
    const token = new CancelToken(c => {
      cancel = c
    })

    return {
      token,
      cancel,
    }
  }

  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;
    this.promise = new Promise(resolve => {
      resolvePromise = resolve
    })

    const token = this
    executor(message => {
      if (token.reason) {
        // Cancellation has already been requested
        return
      }

      token.reason = new Cancel(message)
      resolvePromise(token.reason)
    })
  }
}



class Cancel {
  constructor(message) {
    this.message = message
  }

  toString() {
    return `Cancel ${this.message ? ': ' + this.message : ''}`
  }
}

export default CancelToken
