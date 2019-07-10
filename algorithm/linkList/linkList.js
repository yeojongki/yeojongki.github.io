const LinkListNode = require('./linkListNode')

class LinkList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(value) {
    const newNode = new LinkListNode(value)
    // 如果不存在链表首位
    if (!this.head) {
      this.head = newNode
    } else {
      // 找到最后的节点
      let lastNode = this._getLastNode()
      lastNode.next = newNode
      console.log('lastNode', this.head)
    }
    this.length++
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
}

const linkList = new LinkList()
linkList.append(1)
linkList.append(3)
console.log(linkList.length)
console.log(linkList.toString())
