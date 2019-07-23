// 完成duplicate函数 使之功能复合duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
function duplicate(arr) {
  const len = arr.length
  for (let i = len; i < len * 2; i++) {
    arr[i] = arr[i - len]
  }
  return arr
}

console.log(duplicate([1, 2, 3, 4, 5]))
