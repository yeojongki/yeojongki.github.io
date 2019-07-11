module.exports = {
  /**
   * 验证 index 的合法性
   * @param {number} index
   * @param {number} length 链表当前长度
   * @returns {boolean}
   */
  checkIndex(index, length) {
    if (index === 0) return true
    if (typeof index !== 'number' || index < 0 || index > length) {
      return false
    }
    return true
  }
}
