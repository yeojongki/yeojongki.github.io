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
