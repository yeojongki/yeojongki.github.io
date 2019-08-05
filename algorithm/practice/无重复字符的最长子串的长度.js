// find longest len of non repeating characters

// function lenOfNonRepeatingChar(str) {
//   let noRepeat = ''
//   let maxLen = 0
//   for (let i = 0; i < str.length; i++) {
//     // exist
//     if (noRepeat.indexOf(str[i]) > -1) {
//       noRepeat = noRepeat.substr(i + 1)
//     } else {
//       // not found
//       noRepeat += str[i]
//       maxLen = Math.max(noRepeat.length, maxLen)
//     }
//   }
//   return maxLen
// }

/**
 * 遍历字符串，将出现过的字符存入字典，key为字符，value为字符索引
 * 用maxLen保存遍历过程中找到的最大不重复子串的长度
 * 用start保存最长子串的开始索引
 * 如果字符已经出现在字典中，更新start的值
 * 如果字符不在字典中，更新maxLen的值
 */
function lenOfNonRepeatingChar(str) {
  let existChar = {} // {a:0, b:1, c:2} 等
  let maxLen = 0
  let start = 0 // 最长子串的开始索引

  for (let i = 0; i < str.length; i++) {
    if (existChar[str[i]] >= start) {
      start = existChar[str[i]] + 1
    } else {
      maxLen = Math.max(i - start + 1 , maxLen)
    }
    existChar[str[i]] = i
  }
  return maxLen
}

console.log(lenOfNonRepeatingChar('abcabcbb')) // the answer is "abc", which the length is 3.
console.log(lenOfNonRepeatingChar('bbbbb')) // the answer is "b", with the length of 1.
console.log(lenOfNonRepeatingChar('pwwkew')) //  the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
