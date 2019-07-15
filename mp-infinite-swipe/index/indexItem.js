Component({
  properties: {
    item: {
      type: Object,
      value: {},
    },
    next: {
      type: Object,
      value: {},
    },
    current: {
      type: Number,
      value: 0,
      observer(newVal, oldVal) {
        if (newVal && newVal !== oldVal && newVal === this.data.item.index + 1) {
          // 由于页面滚动中bindChange事件已执行，所以滚动中会出现「下滑查看上一条」，加一秒延时防止其出现
          setTimeout(() => {
            this.setData({
              showFakePrevious: true,
            })
          }, 1000)
        }
      }
    },
  },
  data: {
    scrollTop: 0,
    showFakePrevious: false,
  },
  created() {
  },
  attached() {
  },
  detached() {
  },
  ready() {
  },
  methods: {
  }
})
