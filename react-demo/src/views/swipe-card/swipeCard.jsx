import React from 'react'
import './swipeCard.css'
import dataArr from './dataArr'

class SwipeCard extends React.Component {
  state = {
    dataArr: dataArr,
    // 当前展示图片 index
    currentIndex: 0,
    // 记录偏移量
    offset: {
      x: 0,
      y: 0
    },
    // 位置信息
    position: {
      start: { x: 0, y: 0 },
      end: { x: 0, y: 0 },
      direction: 1, // 滑动方向，左是-1，右是1
      swipping: false // 是否在拖动交换过程中
    },
    // 记录每一个丢出去的方向
    directionArr: [],
    // 显示图片的堆叠数量
    visible: 3,
    // 视口宽度
    winWidth: 0,
    //  滑动阈值
    slideWidth: 70,
    // 超过阈值时的自动偏移量
    offsetWidth: 120,
    // 是否在拖动
    isDrag: false
  }

  componentWillMount() {
    this.setState({
      winWidth: window.innerWidth
    })
  }

  onTransitionEnd = index => {
    const { position, currentIndex } = this.state
    if (currentIndex === index + 1) {
      this.setState({
        position: { ...position, end: { x: 0, y: 0 } }
      })
    }
  }

  onTouchStart = (e, index) => {
    e.stopPropagation()
    const { currentIndex, dataArr } = this.state

    if (index !== dataArr.length - 1 && index === currentIndex) {
      this.setState({
        position: {
          ...this.state.position,
          start: { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY },
          swipping: true
        }
      })
    }
  }

  onTouchMove = e => {
    e.stopPropagation()
    const { position } = this.state

    if (position.swipping) {
      this.setState({
        offset: { x: e.targetTouches[0].clientX - position.start.x, y: e.targetTouches[0].clientY - position.start.y },
        isDrag: true
      })
    }
  }

  onTouchEnd = e => {
    e.stopPropagation()

    const { offset, slideWidth } = this.state

    this.setState(
      {
        position: { ...this.state.position, swipping: false, end: { x: offset.x, y: offset.y } }
      },
      () => {
        // 判断滑动距离超过设定值时，自动飞出
        if (offset.x > slideWidth) {
          this.moveNext(1) //往右
        } else if (offset.x < -slideWidth) {
          this.moveNext(-1) //往左
        }

        this.setState({
          offset: {
            x: 0,
            y: 0,
            isDrag: false
          }
        })
      }
    )
  }

  moveNext = direction => {
    this.setState(
      {
        position: { ...this.state.position, direction }
      },
      () => {
        let { currentIndex, offsetWidth, position, dataArr, directionArr } = this.state

        // 防止在最后倒数几张时操时出错
        try {
          dataArr[currentIndex + 3].draw = true
          this.setState({ dataArr })
        } catch (e) {}

        // 防止在第一张时操作出错
        if (currentIndex > 0) {
          try {
            dataArr[currentIndex - 1].draw = false
            this.setState({ dataArr })
          } catch (e) {}
        }

        directionArr.push(position.direction)

        this.setState({
          currentIndex: this.state.currentIndex + 1, // 每次让下一张卡片往前推进，反之 -- 就是返回上一张
          position: {
            ...this.state.position,
            end: {
              x: !direction ? position.end.x - offsetWidth : position.end.x + offsetWidth,
              y: position.end.y + offsetWidth / 2
            }
          },
          directionArr
        })
      }
    )
  }

  // 初始化每张卡片的样式
  calcCardTransform(index) {
    const { directionArr, currentIndex, position, visible } = this.state
    let style = {}
    // 卡片自动位移距离（飞出屏幕多远）
    let offset = 0
    if (directionArr[index] === 1) {
      offset = 800
    } else if (directionArr[index] === -1) {
      offset = -800
    }

    // 设置层级关系
    if (currentIndex + visible > index) {
      style['zIndex'] = currentIndex - index + visible
    } else {
      style['zIndex'] = -1
    }
    style['transform'] = `translate3d(0,0,${(currentIndex - index) * 60}px)`

    // 让藏在后面的卡片缩小样式堆叠在一起并透明不显示。一旦飞走一张，下一张卡片会自动过渡动画往前推进
    if (index - currentIndex < 0) {
      style['opacity'] = 0
      style['transform'] = `translate3d(${position.end.x + offset}px,${position.end.y}px,${(currentIndex - index) *
        60}px) rotate(${position.direction * -65}deg)`
    }

    // 非手势滑动状态才添加过渡动画
    if (!position.swipping) {
      style['transitionTimingFunction'] = 'ease'
      style['transitionDuration'] = 300 + 'ms'
    }

    return style
  }

  // 第一张卡片的样式
  indexTransform(index) {
    const { offset, currentIndex, winWidth, position } = this.state

    let style = {}
    if (index === currentIndex) {
      style['transform'] = `translate3d(${offset.x}px,${offset.y}px,${(currentIndex - index) *
        60}px) rotate(${(offset.x / winWidth) * -65}deg)`
    }
    // 非手势滑动状态才添加过渡动画
    if (!position.swipping) {
      style['transitionTimingFunction'] = 'ease'
      style['transitionDuration'] = 300 + 'ms'
    }

    return style
  }

  render() {
    const { dataArr } = this.state
    return (
      <div className="card_container">
        {dataArr.map((item, index) => (
          <div
            key={item.id}
            className={item.draw ? 'display card' : 'card'}
            style={{ ...this.calcCardTransform(index), ...this.indexTransform(index) }}
            onTouchStart={$event => this.onTouchStart($event, index)}
            onTouchMove={this.onTouchMove}
            onTouchEnd={this.onTouchEnd}
            onTransitionEnd={() => this.onTransitionEnd(index)}
          >
            {item.desc}
          </div>
        ))}
      </div>
    )
  }
}

export default () => (
  <div style={{ backgroundColor: '#6A8BDF', width: '100vw', height: '100vh' }}>
    <SwipeCard />
    <div style={{ height: '90%', display: 'inline-block', verticalAlign: 'middle' }} />
  </div>
)
