const LinkedList = require('./linkList/doublyLinkedList')

const defaultOptions = {
  max: 2
}

class LRUCache {
  constructor(options) {
    this.map = Object.create(null)
    this.linkedList = new LinkedList()
    this.options = { ...defaultOptions, ...options }
  }

  get(key) {
    const node = this.map[key]
    if (node) {
      console.log('get1', this.linkedList)
      this.linkedList.removeNode(node)
      console.log('get2', this.linkedList)
      // this.linkedList.unshiftNode(node)
      return node.data
    }
  }

  set(key, value) {
    // 如果大于最大值则进行淘汰
    this.length + 1 > this.options.max && this.dispose()

    const data = { key, value }
    this.linkedList.unshift(data)
    this.map[key] = this.linkedList.head
  }

  dispose() {
    const { data } = this.linkedList.pop()
    delete this.map[data.key]
  }

  /**
   * 获取缓存的长度
   * @readonly
   * @memberof LRUCache
   */
  get length() {
    return this.linkedList.length
  }

  get head() {
    let head = this.linkedList.head
    if (head && head.data) {
      return head.data.value
    }
    return null
  }

  get tail() {
    let tail = this.linkedList.tail
    if (tail && tail.data) {
      return tail.data
    }
    return null
  }

  keys() {
    return this.linkedList.toArray(node => node.key)
  }

  values() {
    return this.linkedList.toArray(node => node.value)
  }
}

const cache = new LRUCache()
cache.set('test1', 1)
cache.set('test2', 2)
cache.set('test3', 3)
// 2 3
cache.get('test2')
// 3 2
cache.set('test-1', -1)
console.log(cache.keys())
// console.log(cache.head)
// console.log(cache.linkedList)
// console.log(cache.values())
// console.log(cache.length)
