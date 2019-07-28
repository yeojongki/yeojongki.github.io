import React from 'react'
import withTimer from './withTimer'

@withTimer()
class CountDown extends React.PureComponent {
  render() {
    // 取用 hoc注入的状态
    const { expired, days, hours, minutes, seconds } = this.state.__timer
    return (
      <div>
        <p>expired: {expired ? 'true' : 'false'}</p>
        {expired ? null : (
          <p>
            剩余：{days}天{hours}小时{minutes}分钟{seconds}秒
          </p>
        )}
      </div>
    )
  }
}

export default () => <CountDown endTime={1664307185291} />
