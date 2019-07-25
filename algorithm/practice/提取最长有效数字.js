function extract(str) {
  const arr = str.match(/^\s*[+-]?(\d)+/g)
  if (!arr) return 0
  return +arr[0]
}

console.log(extract('1024word'))
console.log(extract(' -1024word'))
console.log(extract('word1024'))
console.log(extract('10word24'))

// output：
// 1024
// -1024
// 0
// 10
