/**
 * queue: FIFO (first in first out)
 */

class Queue {
  constructor() {
    this._queue = []
  }

  /**
   * 添加元素到队列尾
   * @param {*} item
   * @memberof Queue
   */
  enqueue(item) {
    this._queue.push(item)
  }

  /**
   * 移除队列首元素, 并返回该元素
   * @returns {*}
   * @memberof Queue
   */
  dequeue() {
    return this._queue.shift(item)
  }

  /**
   * 返回队列首元素
   * @returns {*}
   * @memberof Queue
   */
  peek() {
    const length = this.length()
    if (length === 0) {
      return undefined
    }
    return this._queue[length - 1]
  }

  /**
   * 是否为空
   * @returns {boolean}
   * @memberof Queue
   */
  isEmpty() {
    return this.length() === 0
  }

  /**
   * 返回队列的元素个数
   * @returns {number}
   * @memberof Queue
   */
  length() {
    return this._queue.length
  }
}
