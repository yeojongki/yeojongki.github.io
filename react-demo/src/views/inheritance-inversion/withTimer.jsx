import { getLeftTime, getDisplayName } from '@/utils'

export default interval => WrappedComponent => {
  return class extends WrappedComponent {
    static displayName = `inheritance-inversion(${getDisplayName(WrappedComponent)})`

    state = {
      __timer: {
        expired: true,
        day: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
      }
    }

    // 剩余时间戳
    endTimeStamp = this.props.endTime

    componentWillMount() {
      // 未过期则手动调用计时器 开始倒计时
      if (Date.now() < this.endTimeStamp) {
        this.onTimeChange()
        this.setState({ __timer: { ...this.state.__timer, expired: false } })
        this.__timer = setInterval(this.onTimeChange, interval)
      }
    }

    componentWillUnmount() {
      // 清理计时器
      clearInterval(this.__timer)
    }

    onTimeChange = () => {
      const now = Date.now()
      const diff = this.endTimeStamp - now
      if (diff > 0) {
        this.setState({
          __timer: { ...this.state.__timer, ...getLeftTime(parseInt(diff / 1000)), expired: false }
        })
      } else {
        clearInterval(this.__timer)
        this.setState({ __timer: { ...this.state.__timer, expired: true } })
      }
    }

    render() {
      // 反向继承
      return super.render()
    }
  }
}
