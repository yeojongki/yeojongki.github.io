const { checkIndex } = require('./utils')

class SinglyNode {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  /**
   * 插入数据
   * @param {*} data
   * @returns {SinglyLinkedNode}
   * @memberof SinglyLinkedList
   */
  append(data) {
    const newNode = new SinglyNode(data)
    if (!this.head) {
      this.head = newNode
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    this.length++
    return this
  }

  /**
   * 根据值查找元素在链表中的位置, 没有找到返回 -1
   * @param {*} data
   * @returns {number}
   * @memberof SinglyLinkedList
   */
  findIndex(data) {
    let position = 0
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === data) {
        return position
      }
      currentNode = currentNode.next
      position++
    }
    return -1
  }

  /**
   * 查找 index 位置的节点, index 不合法时会返回 null
   * @param {number} index
   * @returns {SinglyNode}
   * @memberof SinglyLinkedList
   */
  getAt(index) {
    if (!checkIndex(index, this.length)) return null

    let position = 0
    let currentNode = this.head
    if (index === 0) {
      return this.head ? this.head.data : null
    } else {
      while (position++ < index) {
        currentNode = currentNode.next
      }
      return currentNode
    }
  }

  /**
   * 根据 index 删除元素, 返回被删除节点, index 不合法时会返回 null
   * @param {*} index
   * @returns {SinglyNode}
   * @memberof SinglyLinkedList
   */
  deleteAt(index) {
    if (!checkIndex(index, this.length)) return null

    let currentNode = this.head
    let prevNode = null
    let position = 0
    if (index === 0) {
      this.head = currentNode.next
    } else {
      while (position++ < index) {
        prevNode = currentNode
        currentNode = currentNode.next
      }
      prevNode.next = currentNode.next
    }
    return currentNode
  }

  /**
   * 将链表中的所有数据转成字符串
   * @returns {string}
   * @memberof SinglyLinkedList
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
   * 链表反转
   * @returns {SinglyLinkedList}
   * @memberof SinglyLinkedList
   */
  reverse() {
    let prevNode = null
    let nextNode = null
    let currentNode = this.head

    while (currentNode) {
      // 保存下一个节点
      nextNode = currentNode.next

      // 将当前节点的下一节点指向前一节点
      currentNode.next = prevNode

      // 作为下次迭代时的（当前节点的）向前指针
      prevNode = currentNode

      // 作为下次迭代时的（当前）节点
      currentNode = nextNode
    }

    // 重置头和尾
    this.tail = this.head
    this.head = prevNode

    return this
  }

  /**
   * 是否为空
   * @returns {boolean}
   * @memberof SinglyLinkedList
   */
  isEmpty() {
    return this.length === 0
  }
}

const linkedList = new SinglyLinkedList()

linkedList
  .append(1)
  .append(4)
  .append(3)

// console.log(linkedList.head)
// console.log(linkedList.findIndex(3))
// console.log(linkedList.getAt(2))
// linkedList.deleteAt(0)
console.log(linkedList.toString())

// linkedList.reverse()
// console.log(linkedList.toString())

/**
 * 迭代反转链表
 * @param {*} head
 * @returns {head}
 */
function reverseByLoop(head) {
  if (!head || !head.next) return head

  let prev
  let next
  while (head) {
    next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}

console.log(reverseByLoop(linkedList.head))

/**
 * 递归反转链表
 * @param {*} head
 * @returns {head}
 */
// function reverseByRecursion(head) {
//   if (!head || !head.next) return head

//   let newHead = reverseByRecursion(head.next)
//   head.next.next = head
//   head.next = null
//   return newHead
// }

// console.log(reverseByRecursion(linkedList.head))
