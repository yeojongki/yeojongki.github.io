const LinkListNode = require('./linkListNode')

class SingleLinkList {
  constructor() {
    this.head = null
    this.length = 0
  }

  /**
   * 添加元素到链表尾部
   * @param {*} value
   */
  append(value) {
    const newNode = new LinkListNode(value)
    // 如果不存在链表首位
    if (!this.head) {
      this.head = newNode
    } else {
      // 找到最后的节点
      let lastNode = this._getLastNode()
      lastNode.next = newNode
    }
    this.length++
  }

  /**
   * 根据值查找元素在链表中的位置
   * @param {*} value
   */
  findIndex(value) {
    let index = -1
    let currentNode = this.head
    while (currentNode) {
      index++
      if (currentNode.data === value) {
        return index
      }
      currentNode = currentNode.next
    }
    return -1
  }

  /**
   * 根据 index 删除元素
   * @param {number} index
   */
  deleteAt(index) {
    if (!this._validateIndex(index)) return null

    let currentNode = this.head
    let priviousNode = null
    let loopIndex = 0

    if (index === 0) {
      this.head = currentNode.next
    } else {
      while (loopIndex++ < index) {
        priviousNode = currentNode
        currentNode = currentNode.next
      }
      priviousNode.next = currentNode.next
    }
    this.length--
    return currentNode.data
  }

  /**
   * 重写 toString 方法
   * @returns
   * @memberof LinkList
   */
  toString() {
    let lastNode = this.head
    let str = ''

    // 获取链表中所有元素
    while (lastNode) {
      str += `,${lastNode.data}`
      lastNode = lastNode.next
    }

    return str.slice(1)
  }

  /**
   * 是否为空
   * @returns {boolean}
   * @memberof LinkList
   */
  isEmpty() {
    return this.length === 0
  }

  /**
   * 获取最后的节点
   * @returns {LinkListNode}
   */
  _getLastNode() {
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  _validateIndex(index) {
    if (typeof index !== 'number' || index < 0 || index > this.length - 1) {
      return null
    }
    return true
  }
}

const linkList = new SingleLinkList()
linkList.append(1)
linkList.append(3)
linkList.append(7)
console.log('findIndex', linkList.findIndex(8))
console.log('length', linkList.length)
console.log('deleteAt', linkList.deleteAt(0))
linkList.deleteAt(1)
console.log('toString', linkList.toString())
