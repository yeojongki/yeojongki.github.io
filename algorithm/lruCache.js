const LinkedList = require('./linkList/doublyLinkedList')

/**
 * 默认选项
 */
const defaultOptions = {
  max: 2,
  maxAge: 0,
  dispose: () => {}
}

class LRUCache {
  constructor(options) {
    this.map = Object.create(null)
    this.linkedList = new LinkedList()
    this.options = { ...defaultOptions, ...options }
  }

  /**
   * 获取缓存并进行更新 如果设置了最大时间并超过该值 或者不存在 则返回null
   * @param {*} key
   * @returns
   * @memberof LRUCache
   */
  get(key) {
    return this._get(key, true)
  }

  /**
   * 获取缓存 不进行更新
   * @param {*} key
   * @memberof LRUCache
   */
  peek(key) {
    return this._get(key)
  }

  /**
   * 处理获取缓存
   * @param {*} key
   * @param {*} shouldUpdate 是否需要更新缓存时间
   * @returns {*}
   * @memberof LRUCache
   */
  _get(key, shouldUpdate) {
    const now = +new Date()
    const node = this.map[key]
    if (node) {
      const { start, maxAge } = node.data
      // 如果设置了并到了过期时间, 则进行删除
      if (this.options.maxAge && now > maxAge + start) {
        this._dispose(key)
        return null
      }

      // 如果需要更新时间
      shouldUpdate && (node.data.start = now)

      this.linkedList.removeNode(node)
      this.linkedList.unshiftNode(node)
      return node.data
    }
    return null
  }

  /**
   * 设置缓存
   * @param {*} key
   * @param {*} value
   * @memberof LRUCache
   */
  set(key, value) {
    const now = +new Date()
    // 如果大于最大值则淘汰末尾数据
    this.length + 1 > this.options.max && this._dispose(this.tail.key)

    const data = { key, value, start: now, maxAge: this.options.maxAge }
    this.linkedList.unshift(data)
    this.map[key] = this.linkedList.head
  }

  /**
   * 释放缓存
   * @memberof LRUCache
   */
  _dispose(key) {
    const node = this.map[key]
    this.linkedList.removeNode(node)
    delete this.map[key]
    this.options.dispose(key, node.data.value)
  }

  /**
   * 获取缓存的长度
   * @readonly
   * @memberof LRUCache
   */
  get length() {
    return this.linkedList.length
  }

  /**
   * 获取最新的数据，没有时返回 null
   * @returns {*}
   * @readonly
   * @memberof LRUCache
   */
  get head() {
    let head = this.linkedList.head
    if (head && head.data) {
      return head.data
    }
    return null
  }

  /**
   * 获取最旧/老的数据，没有时返回 null
   * @returns {*}
   * @readonly
   * @memberof LRUCache
   */
  get tail() {
    let tail = this.linkedList.tail
    if (tail && tail.data) {
      return tail.data
    }
    return null
  }

  /**
   * 获取缓存中所有的键值数组
   * @returns {Array<string>}
   * @memberof LRUCache
   */
  keys() {
    return this.linkedList.toArray(node => node.key)
  }

  /**
   * 获取缓存中所有的值数组
   * @returns {Array<any>}
   * @memberof LRUCache
   */
  values() {
    return this.linkedList.toArray(node => node.value)
  }
}

const cache = new LRUCache({
  maxAge: 0,
  dispose: (key, value) => {
    // console.log('dispose', { key, value })
  }
})
// cache.set('test1', 1) // 1
// cache.set('test2', 2) // 2 1
// cache.set('test3', 3) // 3 2

// cache.get('test2') // 2 3
// cache.set('test-1', -1) // -1 2
// console.log(cache.linkedList.head)
// console.log(cache.linkedList.tail)

// console.log(cache.keys())
// console.log(cache.linkedList)
// console.log(cache.linkedList.head)

// console.log(cache.linkedList.head.next)
// console.log(cache.linkedList.tail)

console.log(cache.values())
// console.log(cache.length)
// console.log(cache.head)
// console.log(cache.tail)

// maxAge
// cache.set('test', 'test')
// setTimeout(() => {
//   console.log(cache.get('test'))
//   console.log(cache.keys())
// }, 1000)
