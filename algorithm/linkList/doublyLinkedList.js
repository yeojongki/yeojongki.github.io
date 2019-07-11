const { checkIndex } = require('./utils')

class DoublyNode {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * 插入数据
   * @param {*} data
   * @returns {DoublyLinkedList}
   * @memberof DoublyLinkedList
   */
  append(data) {
    const newNode = new DoublyNode(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  /**
   * 将链表中的所有数据转成字符串
   * @returns {string}
   * @memberof DoublyLinkedList
   */
  toString() {
    let str = ''
    let currentNode = this.head
    while (currentNode) {
      str += `,${currentNode.data}`
      currentNode = currentNode.next
    }
    return str.slice(1)
  }

  /**
   * 将链表中的所有数据转成反向字符串
   * @returns {string}
   * @memberof DoublyLinkedList
   */
  toStringReverse() {
    let str = ''
    let currentNode = this.tail
    while (currentNode) {
      str += `,${currentNode.data}`
      currentNode = currentNode.prev
    }
    return str.slice(1)
  }

  /**
   * 将链表中的所有数据转成数组
   * @returns {any[]}
   * @memberof DoublyLinkedList
   */
  toArray() {
    const datas = []
    let currentNode = this.head
    while (currentNode) {
      datas.push(currentNode.data)
      currentNode = currentNode.next
    }
    return datas
  }

  /**
   * 在 index 处插入数据, index 不合法时会返回 null
   * @param {number} index
   * @param {*} data
   * @returns {DoublyLinkedList|null}
   * @memberof DoublyLinkedList
   */
  appendAt(index, data) {
    if (!checkIndex(index, this.length)) return null

    const newNode = new DoublyNode(data)

    if (index === 0) {
      // 长度为空时
      if (this.length === 0) {
        this.head = newNode
        this.tail = newNode
      } else {
        // 后面还有节点
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }
    } else {
      // 等于插到末尾
      if (index === this.length) {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      } else {
        let currentNode = this.head
        let prevNode = null
        let position = 0

        while (position++ < index) {
          prevNode = currentNode
          currentNode = currentNode.next
        }

        prevNode.next = newNode
        currentNode.prev = newNode
        newNode.prev = prevNode
        newNode.next = currentNode
      }
    }

    this.length++
    return this
  }

  /**
   * 删除末尾节点, 返回删除的节点, 不存在时返回 null
   * @returns {DoublyNode}
   * @memberof DoublyLinkedList
   */
  pop() {
    if (this.length === 0) return null

    let deleteNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = deleteNode.prev
      this.tail.next = null
    }
    this.length--
    return deleteNode
  }

  /**
   * 删除首节点, 返回删除的节点, 不存在时返回 null
   * @returns {DoublyNode}
   * @memberof DoublyLinkedList
   */
  shift() {
    if (this.length === 0) return null

    let deleteNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = deleteNode.next
    }
    return deleteNode
  }

  /**
   * 根据值获取该节点
   * @param {*} data
   * @returns {object} {node, index} 节点和节点索引
   * @memberof DoublyLinkedList
   */
  get(data) {
    return this.findIndex(data, (node, index) => ({ node: node, index }))
  }

  /**
   * 根据 index 删除元素, 返回被删除节点, index 不合法时会返回 null
   * @param {number} index
   * @returns {DoublyNode}
   * @memberof DoublyLinkedList
   */
  deleteAt(index) {
    if (!checkIndex(index, this.length)) return null

    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let position = 0
    let currentNode = this.head
    let prevNode = null
    let nextNode = null

    while (position++ < index) {
      prevNode = currentNode
      currentNode = currentNode.next
    }

    nextNode = currentNode.next
    prevNode.next = nextNode
    nextNode.prev = prevNode

    return currentNode
  }

  /**
   * 根据值删除元素
   * @param {*} data
   * @returns {DoublyNode}
   * @memberof DoublyLinkedList
   */
  delete(data) {
    const { index } = this.get(data)
    return this.deleteAt(index)
  }

  /**
   * 根据值查找元素在链表中的位置, 如果存在 callback 则返回 callback(DoublyNode, index) 没有找到返回 -1
   * @param {*} data
   * @param {Function} callback
   * @returns {DoublyNode}
   * @memberof DoublyLinkedList
   */
  findIndex(data, callback) {
    let position = 0
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === data) {
        if (callback && typeof callback === 'function') {
          return callback(currentNode, position)
        }
        return position
      }
      currentNode = currentNode.next
      position++
    }
    return -1
  }

  /**
   * 链表反转
   * @returns {DoublyLinkedList}
   * @memberof DoublyLinkedList
   */
  reverse() {
    let currentNode = this.head
    let prevNode = null
    let nextNode = null

    while (currentNode) {
      // 保存下一个节点
      nextNode = currentNode.next

      // 将当前节点的下一节点指向前一节点
      currentNode.next = prevNode

      // 将前一节点和下一节点的指向往前挪
      prevNode = currentNode
      currentNode = nextNode
    }

    // 重置头和尾
    this.tail = this.head
    this.head = prevNode
  }

  /**
   * 是否为空
   * @returns {boolean}
   * @memberof DoublyLinkedList
   */
  isEmpty() {
    return this.length === 0
  }
}

const linkedList = new DoublyLinkedList()
linkedList.appendAt(0, -1)
// .append(2)
// .append(2)
// .pop()

linkedList.append(3)
// console.log(linkedList.shift())
// console.log(linkedList.get(3))
// linkedList.shift()
// linkedList.append(2)
// linkedList.pop()
// linkedList.deleteAt(0)
// linkedList.delete(3)
linkedList.append(5)
// console.log(linkedList)
// console.log(linkedList.toString())
// console.log(linkedList.toStringReverse())
linkedList.reverse()
console.log(linkedList.toArray())
