let isAnimatIng = false

export function animate(dom, props, duration = 1000, easing) {
  if (isAnimatIng) return
  isAnimatIng = true
  const styles = getStyle(dom)
  const animateList = []
  Object.keys(props).forEach(key => {
    animateList.push(animteHandler(dom, key, styles[key], props[key], duration, easing))
  })

  Promise.all(animateList).then(() => {
    isAnimatIng = false
    console.log('animate end.')
  })
}

export function now() {
  return +new Date()
}

export function getStyle(dom) {
  return getComputedStyle(dom)
}

export function replacePx(str) {
  return +str.replace('px', '')
}

function animteHandler(dom, prop, start, end, duration, easing) {
  return new Promise((resolve) => {
    // 开始时间
    const startTime = now()
    // 开始值
    start = replacePx(start)
    // 结束值
    end = replacePx(end)

    function tick() {
      // 剩余时间
      const remainingTime = duration + startTime - now()
      // 时间进度
      const percent = 1 - (remainingTime / duration)

      // 剩余距离
      const left = (end - start) * percent + start
      if (percent === 1) {
        resolve()
        clearInterval(timer)
      }
      dom.style[prop] = left + 'px'
    }

    const timer = setInterval(tick, 16)
  })
}

// function animteHandler(dom, prop, start, end, duration, easing) {
//   return new Promise((resolve) => {
//     // 开始值
//     start = replacePx(start)
//     // 结束值
//     end = replacePx(end)
//     // 开始时间
//     const startTime = now()
//     // 动画长度
//     const animateLenth = start - end
//     // 每 16ms 步长
//     const step = animateLenth / duration * 16
//     // 前一次位置
//     let prev = start
//     // 下次位置
//     let next

//     function tick() {
//       if (now() - startTime < duration) {
//         next = prev - step
//         prev = next
//       } else {
//         next = end
//         resolve()
//         clearInterval(timer)
//       }
//       dom.style[prop] = next + 'px'
//     }

//     const timer = setInterval(tick, 16)
//   })
// }
