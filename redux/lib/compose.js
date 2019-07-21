// export default (...fn) => {}
// 有fn1 fn2 fn3三个函数，实现一个 compose 函数：
// 1. compose(fn1, fn2, fn3) 从右到左执行
// 2. 上一个执行函数的结果为下一个执行函数的参数

// const sayHi = name => 'hi:' + name

// const toUpperCase = text => text.toUpperCase()

// const reverse = str =>
//   str
//     .split('')
//     .reverse()
//     .join('')

const compose = (...funcs) => {
  // return (...args) =>
  //   funcs.reduceRight((prev, current) => {
  //     let currentArg = typeof prev === 'function' ? prev.apply(null, args) : prev
  //     return current(currentArg)
  //   })

  if (funcs.length === 0) return arg => arg

  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

// const composeFn = compose(
//   sayHi,
//   toUpperCase,
//   reverse
// )
// console.log(composeFn('jay'))

export default compose
