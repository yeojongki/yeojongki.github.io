// 实现 sum 函数使得以下表达式的值正确
// sum(1, 2, 3).sumOf() // 6
// sum(2, 3)(2).sumOf() // 7
// sum(1)(2)(3)(4).sumOf() // 10
// sum(2)(4, 1)(2).sumOf() // 9

function sum(...args) {
  let cur = args.reduce((p, c) => p + c)

  let fn = (...args2) => {
    cur = cur + args2.reduce((p, c) => p + c)
    return fn
  }

  fn.sumOf = () => cur

  return fn
}

console.log(sum(1, 2, 3).sumOf())
console.log(sum(2, 3)(2).sumOf())
console.log(sum(1)(2)(3)(4).sumOf())
console.log(sum(2)(4, 1)(2).sumOf())
