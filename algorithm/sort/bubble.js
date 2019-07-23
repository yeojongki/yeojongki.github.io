const swap = require('./utils')

function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let hasChanged = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        hasChanged = true
      }
    }
    if (!hasChanged) break
  }
  return arr
}

console.log(bubble([1, 3, 5, 4, 2]))
