/**
 * stack: LIFO (last in first out)
 */
class Stack {
  constructor() {
    this._stack = []
  }

  /**
   * 进栈
   * @param {*} item
   * @memberof Stack
   */
  push(item) {
    this._stack.push(item)
  }

  /**
   * 出栈, 并返回该元素
   * @returns {*}
   * @memberof Stack
   */
  pop() {
    return this._stack.pop()
  }

  /**
   * 返回栈顶元素
   * @returns {*}
   * @memberof Stack
   */
  peek() {
    const length = this.length()
    if (length === 0) {
      return null
    }
    return this._stack[length - 1]
  }

  /**
   * 移除栈所有元素
   */
  clear() {
    this._stack = []
  }

  /**
   * 是否为空
   * @returns {boolean}
   * @memberof Stack
   */
  isEmpty() {
    return this.length() === 0
  }

  /**
   * 返回队列的元素个数
   * @returns {number}
   * @memberof Stack
   */
  length() {
    return this._stack.length
  }
}

// https://leetcode-cn.com/problems/valid-parentheses/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

function isValid(str) {
  const stack = new Stack()
  let map = {
    '(': -1,
    ')': 1,
    '{': -2,
    '}': 2,
    '[': -3,
    ']': 3
  }
  for (let i = 0; i < str.length; i++) {
    let s = str[i]
    if (map[s] < 0) {
      stack.push(s)
    } else {
      if (map[stack.pop()] + map[s] !== 0) return false
    }
  }
  return true
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
