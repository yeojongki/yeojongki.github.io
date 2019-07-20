// 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
const array = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

const isArray = arr => Array.isArray(arr)

const sort = (a, b) => a - b

// const flat = arr => {
//   return arr.reduce((prev, current) => prev.concat(isArray(current) ? flat(current) : current), [])
// }
// console.log( [...new Set(flat(array))].sort(sort))

// console.log(
//   Array.from(
//     new Set(
//       String(array)
//         .split(',')
//         .map(Number)
//     )
//   ).sort(sort)
// )

// const handle = arr => [...new Set([].concat(...arr.map(item => (isArray(item) ? handle(item) : item))))].sort(sort)
// console.log(handle(array))

function handle(arr, ret = []) {
  arr.forEach(item => {
    if (isArray(item)) {
      handle(item, ret)
    } else {
      ret.push(item)
    }
  })
  return ret
}
console.log([...new Set(handle(array))].sort(sort))
