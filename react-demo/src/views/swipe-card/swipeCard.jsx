import React from 'react'
import './swipeCard.css'

const dataArr = [
  {
    id: 1,
    bookName: '我家妹妹是反派',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/1_1.gif',
    desc: '兄妹如何在死亡游戏里浪到飞起！',
    cbid: '11208822204741803',
    isLoad: !0,
    tagShow: !0,
    draw: !0
  },
  {
    id: 2,
    bookName: '笼中对追凶游戏',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/2.png',
    desc: '这场游戏里，你必须找到凶手，或者成为凶手……',
    cbid: '9635764204982603',
    isLoad: !0,
    tagShow: !1,
    draw: !0
  },
  {
    id: 3,
    bookName: '话不可以乱说',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/3.png',
    desc: '小心，这个群里说的任何话都会成真哦...',
    cbid: '9623572603280103',
    isLoad: !1,
    tagShow: !1,
    draw: !0
  },
  {
    id: 4,
    bookName: '家长聊天群',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/4.gif',
    desc: '高能预警！家长群炫富模式开启',
    cbid: '11456705603378903',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 5,
    bookName: '师父，大师兄让妖怪抓走了！',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/5.png',
    desc: '西天取经只为报销路费',
    cbid: '11564470004137203',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 6,
    bookName: '我在文字世界里修仙',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/6.png',
    desc: '打打嘴炮就升级，妈妈再也不用担心我的学习了',
    cbid: '11498134503474503',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 7,
    bookName: '皇朝聊天群',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/7.png',
    desc: '活久见！光绪和曹丕在群里打情骂俏~',
    cbid: '11540693404520703',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 8,
    bookName: '后羿追月',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/8.png',
    desc: '后羿：异地恋确实不行，我怀疑自己被绿了',
    cbid: '11511284003602503',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 9,
    bookName: '我哥炸了以后',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/9.png',
    desc: '爸爸告诉我隐藏了数十年的秘密…',
    cbid: '11496842203040203',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 10,
    bookName: '都末日了还不网恋么',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/10.gif',
    desc: '末日摇一摇，摇出萌脸长腿妹',
    cbid: '9950816103623503',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 11,
    bookName: '扑街群的日常',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/11.png',
    desc: '扑街作家为上位竟然做出这种事！？',
    cbid: '10665141403224303',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 12,
    bookName: '地球遗孤',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/12.png',
    desc: '一觉醒来，地球上就剩我一个人了？',
    cbid: '11444671603995003',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 13,
    bookName: '遗忘的代价',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/13.png',
    desc: '这里可以抹掉一切记忆，只要你…付出一点代价',
    cbid: '11477594403954403',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 14,
    bookName: '软件们的日常',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/14.png',
    desc: 'APP也会撕逼的啊？',
    cbid: '11537971403493603',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 15,
    bookName: '养尸重镇',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/15.gif',
    desc: '欢迎来到活人的地狱…',
    cbid: '11941364403003303',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 16,
    bookName: '细胞聊天群',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/16.png',
    desc: '各细胞注意！机会难得，今天一定要让主人脱单！',
    cbid: '11445061404391403',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 17,
    bookName: '我又被配角弄死了',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/17.png',
    desc: '主角光环体验差，出场立马领便当',
    cbid: '11586350404770803',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 18,
    bookName: '玛丽苏是真的可怕',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/18.png',
    desc: '我的眼泪都成钻石了，脸忒疼',
    cbid: '10812603203772603',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 19,
    bookName: '快看，鬼差和系统掐架了',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/19.png',
    desc: '三人行，必有一废…废物',
    cbid: '10994462803093903',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 20,
    bookName: '末世批发商',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/20.png',
    desc: '末日已至，生意兴隆',
    cbid: '11490810204905003',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 21,
    bookName: '诡群',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/21.png',
    desc: '替鬼杀人的群，你听说过吗？',
    cbid: '9649948804189703',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 22,
    bookName: '对话西游之八十一难',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/22.png',
    desc: '悟空坑队友大合集',
    cbid: '9628608903513803',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 23,
    bookName: '图灵爱情',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/23.png',
    desc: '讨厌！是机器人就不能爱你了吗？！',
    cbid: '9623674203291903',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 24,
    bookName: '陛下使不得',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/24.png',
    desc: '原来神仙们也痴迷网购、直播和农药啊…',
    cbid: '11621065704218903',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 25,
    bookName: '一本重点修真大学',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/25.png',
    desc: '高考落榜后，我收到了985修真学院的录取通知书…',
    cbid: '11539367004060203',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 26,
    bookName: '位面公寓日常',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/26.png',
    desc: '几十亿的债怎么还，在线等，急！',
    cbid: '11540817103405303',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 27,
    bookName: '丧尸修了仙',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/27.png',
    desc: '拜托…我可是丧尸啊！干嘛让我拯救世界？',
    cbid: '11445309304505103',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 28,
    bookName: '谁动了我的尸体',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/28.png',
    desc: '一段恐怖的校园传说，引出七年前那未结的奸杀案',
    cbid: '9654113303427803',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 29,
    bookName: '阴间聊天群',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/29.png',
    desc: '我成了黑白无常的跑腿小弟',
    cbid: '11446804004023603',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 30,
    bookName: '穿越了，在线等，急',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/30.png',
    desc: '亲，现在下订单都可穿越了哦',
    cbid: '11445290104499403',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 31,
    bookName: '赶尸客栈：进店莫理人闲事',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/31.png',
    desc: '进店莫理人闲事，出门莫思梦里人',
    cbid: '10709385803326303',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 32,
    bookName: '偶与男友的日常',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/32.gif',
    desc: '找对象秘籍，成为会发表情包的沙雕！',
    cbid: '11909491904539403',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 33,
    bookName: '时空潜伏',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/33.png',
    desc: '已经去世3年的同学，此刻出现在我面前…',
    cbid: '11446243404835003',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 34,
    bookName: '大师爹的修仙日常',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/34.png',
    desc: '如何边修仙边带娃？在线等，挺急的！',
    cbid: '11602944904935003',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 35,
    bookName: '谁动了我的面膜',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/35.png',
    desc: '她看到，面膜下面是一张血肉模糊的脸',
    cbid: '9823625404712403',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 36,
    bookName: '活着醒来',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/36.png',
    desc: '这局游戏里，没人能活着醒来…',
    cbid: '11654785903464103',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 37,
    bookName: '末日里的歌者',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/37.png',
    desc: '我是一个没有记忆的丧尸，但爱你是我的本能',
    cbid: '11445209004465603',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 38,
    bookName: '厕所里的双面镜',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/38.png',
    desc: '你也觉得厕所的那面镜子有点古怪吧？',
    cbid: '9905103604269803',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 39,
    bookName: '宠物圈的萌系日常',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/39.png',
    desc: '胖橘猫变身萌宠界月老，还不是为了小鱼干！',
    cbid: '11455497104063903',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 40,
    bookName: '我竟然是爸爸',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/40.png',
    desc: '喜当爹…一点也不开心啊喂！',
    cbid: '11461875904382703',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 41,
    bookName: '地心都市',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/41.png',
    desc: '我成为了地下世界的九等公民……',
    cbid: '11587335603584003',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 42,
    bookName: '好大一座庙',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/42.png',
    desc: '神仙代购，是种怎样的操作？',
    cbid: '11447692804347703',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 43,
    bookName: '施主，你好',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/43.gif',
    desc: '这位女施主，让老衲看看手相呀',
    cbid: '11448096503393203',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 44,
    bookName: '通灵客栈',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/44.png',
    desc: '通灵客栈规矩：阳寿十年，换留宿一晚… ',
    cbid: '9667343204129503',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 45,
    bookName: '异界惊喜大红包',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/45.png',
    desc: '猫咪张嘴说话是种怎样的体验？',
    cbid: '10924595204626603',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 46,
    bookName: '黄泉客栈：隆重发售投胎攻略',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/46.png',
    desc: '来世想做富二代？你需要买这本《投胎攻略》',
    cbid: '10799041303082303',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 47,
    bookName: '快进60秒',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/47.png',
    desc: '你渴望快进时间的能力吗？',
    cbid: '9657969803670503',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  },
  {
    id: 48,
    bookName: '隧道回声',
    src: '//qidian.gtimg.com/acts/2019/57928942/images/boy/48.png',
    desc: '我在平行时空里杀了5个我',
    cbid: '10002254403231403',
    isLoad: !1,
    tagShow: !1,
    draw: !1
  }
  // ,
  // {
  //   id: 49,
  //   bookName: '',
  //   src: '',
  //   desc: '',
  //   cbid: '',
  //   isLoad: !1,
  //   tagShow: !1,
  //   draw: !1
  // }
]

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
