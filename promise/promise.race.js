function race(promises) {
  return new Promise((resolve, reject) => {
    if (!promises[Symbol.iterator]) {
      return reject(new TypeError(`${typeof promises} ${promises} is not iterable (cannot read property Symbol(Symbol.iterator))`))
    }

    promises.forEach((p, i) => {
      if (typeof p.then === 'function') {
        p.then(v => {
          resolve(v)
        }, reject)
      } else {
        resolve(p)
      }
    })
  })
}

race([1, Promise.reject(4)]).then(res => {
  console.log(res)
})
