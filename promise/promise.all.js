// function all(promises) {
//   return new Promise((resolve, reject) => {
//     if (!promises[Symbol.iterator]) {
//       return reject(new TypeError(`${typeof promises} ${promises} is not iterable (cannot read property Symbol(Symbol.iterator))`))
//     }

//     const result = []

//     const helper = p => {
//       if (error) {
//         return reject(err)
//       }
//       if (typeof p.then === 'function') {
//         p.then(v => {
//           result.push(v)
//           if (promises.length) {
//             helper(promises.shift())
//           } else {
//             return resolve(result)
//           }
//         }).catch(reject)
//       } else {
//         result.push(p)
//         if (promises.length) {
//           helper(promises.shift())
//         } else {
//           return resolve(result)
//         }
//       }
//     }

//     helper(promises.shift())
//   })
// }

function all(promises) {
  return new Promise((resolve, reject) => {
    if (!promises[Symbol.iterator]) {
      return reject(new TypeError(`${typeof promises} ${promises} is not iterable (cannot read property Symbol(Symbol.iterator))`))
    }

    let count = promises.length
    const result = []
    const helper = () => {
      if (!--count) {
        resolve(result)
      }
    }

    promises.forEach((p, i) => {
      if (typeof p.then === 'function') {
        p.then(v => {
          result[i] = v
          helper()
        }, reject)
      } else {
        result[i] = p
        helper()
      }
    })
  })
}

all([1, 2, Promise.reject(4)]).then(res => {
  console.log(res)
})
