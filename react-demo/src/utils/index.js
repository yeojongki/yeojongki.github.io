// 获取剩余时间
export function getLeftTime(leftTime) {
  // 小于10的格式化函数
  const timeFillZero = param => (param < 10 ? '0' + param : param)

  let days = Math.floor(leftTime / 60 / 60 / 24)
  let hours = Math.floor((leftTime / 60 / 60) % 60)
  let minutes = Math.floor((leftTime / 60) % 60)
  let seconds = Math.floor(leftTime % 60)
  return {
    days: timeFillZero(days),
    hours: timeFillZero(hours),
    minutes: timeFillZero(minutes),
    seconds: timeFillZero(seconds)
  }
}

// 获取组件 displayName
export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
