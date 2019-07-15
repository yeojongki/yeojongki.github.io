Page({
  data: {
    articleData: [],
    cachedCount: 0,
    current: 0,
  },

  onLoad(query) {
    this.newsCount = 0
    const { id } = query
    this.fetchData(id)
  },

  fetchData(id) {
    const { cachedCount } = this.data
    const data = [{}, {}, {}, {}, {}]
    data.forEach((item, index) => {
      let info = item
      // index: 无限刷中出现在第几条
      // position: 数据存储位置[第i刷][第j条]
      // next: 下一条数据的存储位置[第i刷][第j条]
      info.index = this.newsCount++
      info.position = [cachedCount, index]
      info.next = data.length - index === 1 ? [cachedCount + 1, 0] : [cachedCount, index + 1]
      data[index] = info
    })
    // 按照[第i刷][j条新闻内容]的格式setData
    this.setData({
      [`articleData[${cachedCount}]`]: [...data],
      cachedCount: cachedCount + 1,
    })
  },
  bindChange(event) {
    let current = event.detail.current

    if (this.newsCount - current < 2) {
      this.fetchData()
    }
    this.setData({
      current: current,
    })
    // 短暂震动效果
    wx.vibrateShort({})
  },
})
