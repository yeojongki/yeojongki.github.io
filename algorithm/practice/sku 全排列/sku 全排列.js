// ref: https://juejin.im/post/5ee6d9026fb9a047e60815f1

let names = ["iPhone X", "iPhone XS"]

let colors = ["黑色", "白色"]

let storages = ["64g", "256g"]

// [
//   ["iPhone X", "黑色", "64g"],
//   ["iPhone X", "黑色", "256g"],
//   ["iPhone X", "白色", "64g"],
//   ["iPhone X", "白色", "256g"],
//   ["iPhone XS", "黑色", "64g"],
//   ["iPhone XS", "黑色", "256g"],
//   ["iPhone XS", "白色", "64g"],
//   ["iPhone XS", "白色", "256g"],
// ]

const combine = (...chunks) => {
  let ret = []

  let helper = (index, prev) => {
    // // ["iPhone X", "iPhone XS"] --> ["黑色", "白色"] --> ["64g", "256g"]
    // ["iPhone X", "iPhone XS"] --> ["黑色", "白色"] --> ["64g", "256g"]
    let chunk = chunks[index]
    // // false --> false --> true
    // false --> false --> true
    let isLast = chunks.length - 1 === index
    // // iPhone X --> 黑色 --> 64g --> 256g
    // iPhone X --> 白色 --> 64g -> 256g
    for (let value of chunk) {
      // prev = [], [].concat("iPhone X") = ["iPhone X"]
      // // prev = ["iPhone X"], ["iPhone X"].concat("黑色") = ["iPhone X, 黑色"]
      // // prev = ["iPhone X, 黑色"], ["iPhone X, 黑色"].concat("64g") = ["iPhone X, 黑色", 64g]
      // prev = ["iPhone X"], ["iPhone X"].concat("白色") = ["iPhone X", "白色"]
      // prev = ["iPhone X", "白色"], ["iPhone X", "白色"].concat("64g") = ["iPhone X", "白色", "64g"]
      // prev = ["iPhone X", "白色"], ["iPhone X", "白色"].concat("256g") = ["iPhone X", "白色", "256g"]
      let cur = prev.concat(value)
      if (isLast) {
        // [["iPhone X, 黑色", 64g], ["iPhone X, 黑色", 256g], ["iPhone X", "白色", "64g"], ["iPhone X", "白色", "256g"]]
        ret.push(cur)
      } else {
        // stack -> helper(1, ["iPhone X"])
        // // stack -> helper(2, ["iPhone X, 黑色"]) -> 弹出
        // // stack -> helper(2, ["iPhone X", "白色"]) --> 弹出
        helper(index + 1, cur)
      }
    }
  }

  debugger
  helper(0, [])
  return ret
}

console.log(combine(names, colors, storages))
