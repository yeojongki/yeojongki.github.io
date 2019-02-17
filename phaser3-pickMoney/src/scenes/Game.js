import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' })
    this.score = 0
    this.scoreSpr = undefined
    this.cat = null
    this.moneyGroup = null
    this.isTouch = false
  }

  init() {
    this.score = 0
  }

  create() {
    // 背景
    let bg = this.add.image(0, 0, 'bg').setOrigin(0)
    bg.displayWidth = config.width
    bg.displayHeight = config.height

    // 分数
    this.scoreSpr = this.add.text(20, 20, `score: ${this.score}`, {
      fontSize: '40px'
    })

    // 添加主角
    this.cat = this.add.sprite(this.cameras.main.centerX, this.cameras.main.height * 0.91, 'cat').setInteractive()
    this.setRatioSize(this.cat, 150)
    // 监听touch事件
    this.input.on('pointerdown', () => (this.isTouch = true))
    this.input.on('pointermove', this.handleRoleMove.bind(this))
    this.input.on('pointerup', () => (this.isTouch = false))

    // 开启重力
    this.physics.world.enable(this.cat)
    this.cat.body.allowGravity = false

    // 元宝组
    this.moneyGroup = this.add.group()

    // 开启定时器生成元宝
    this.time.addEvent({
      delay: 500,
      repeat: -1,
      callbackScope: this,
      callback: this.createMoney
    })
  }

  // 人物移动
  handleRoleMove(e) {
    if (this.isTouch) {
      // 判断是否点中猫，点中才移动
      let x = e.position.x
      let centerW = this.cat.width / 2
      if (x >= this.cat.x - centerW && x <= this.cat.x + centerW) {
        // 如果没超出屏幕
        if (x <= centerW) x = centerW // 最左侧
        if (x > this.cameras.main.width - centerW) x = this.cameras.main.width - centerW // 最右侧
        this.cat.x = x
      }
    }
  }

  // 生成一个随机元宝
  createMoney() {
    // 元宝类型
    const moneyTypes = ['bomb', 'yb1', 'yb2', 'yb3']

    const MONEY_WIDTH = 70
    let x = Phaser.Math.Between(10, this.cameras.main.width)
    let type = moneyTypes[Math.floor(Math.random() * moneyTypes.length)]
    let moneySprite = this.moneyGroup.get(x, MONEY_WIDTH, type) //* get to pool instead of create

    // https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Group.html#get__anchor
    moneySprite.setActive(true)
    moneySprite.setVisible(true)

    // 重置为没播放过音乐的状态
    moneySprite.playedSound = false
    // 重置为没设置过分数的状态
    moneySprite.settedScore = false

    // 设置元宝的大小
    if (!moneySprite.settedSize) {
      this.setRatioSize(moneySprite, MONEY_WIDTH)
      moneySprite.settedSize = true
    }

    // 添加元宝的类型
    if (!moneySprite.types) moneySprite.types = type

    // 开启物理引擎
    this.physics.world.enable(moneySprite)

    // 设置与世界的边界碰撞 https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Events.html#event:WORLD_BOUNDS__anchor
    moneySprite.body.collideWorldBounds = true // 必须
    moneySprite.body.onWorldBounds = true
    this.physics.world.on('worldbounds', (body, up, down) => {
      // 元宝与下边界接触的时候销毁
      if (down) {
        let sprite = body.gameObject
        sprite.destroy()
        // this.moneyGroup.killAndHide(sprite)
      }
    })

    // // 有反弹碰撞监测事件
    // this.physics.add.collider(moneySprite, this.cat, this.handleCollider, null, this)
    // 无反弹碰撞监测事件
    this.physics.add.overlap(moneySprite, this.cat, this.handleCollider, null, this)
  }

  // 碰撞事件
  handleCollider(money) {
    this.moneyGroup.killAndHide(money)
    // 元宝类型
    const types = money.types
    const typesScoreMap = {
      yb1: { img: 'one', score: 1 },
      yb2: { img: 'three', score: 3 },
      yb3: { img: 'five', score: 5 }
    }

    // 添加得分图片 不为炸弹
    if (!money.settedScore && types !== 'bomb') {
      let scoreSprite = this.add.image(money.x, money.y, typesScoreMap[types].img).setAlpha(0)
      // 设置为已经设置过分数的状态
      money.settedScore = true
      this.setRatioSize(scoreSprite, money.width)
      this.tweens.add({
        targets: scoreSprite,
        y: scoreSprite.y - 20,
        duration: 800,
        alpha: 1,
        ease: 'Power0',
        onComplete: () => scoreSprite.destroy()
      })
    }

    // 播放碰撞音效
    if (!money.playedSound) {
      // 加分处理
      const handleScore = types => {
        this.score += typesScoreMap[types].score
        this.setScoreText(this.score)
      }
      types === 'bomb'
        ? this.sound.play('boom', { loop: false }) && this.gameOver(this.score) // 拾取到炸弹
        : this.sound.play('addscore', { loop: false }) && handleScore(types) // 元宝
      // 设置为播放过音乐
      money.playedSound = true
    }
  }

  /**
   * 游戏结束 设置分数跳转场景
   */
  gameOver(score) {
    // localstorage设置最高分数
    let bestScore = localStorage.getItem(config.bestScoreKey) || this.score
    if (+score >= +bestScore) {
      localStorage.setItem(config.bestScoreKey, score)
    }
    this.scene.start('Over', { score: this.score, bestScore: localStorage.getItem(config.bestScoreKey) || 0 })
  }

  /**
   * 设置displayObject的展示大小 不能直接设置width 需要设置displayWidth + width
   * @param {GameObjects} spr displayObject
   * @param {Number} destW 目标宽度
   */
  setRatioSize(spr, destW) {
    const ratio = spr.width / spr.height
    spr.displayWidth = destW
    spr.displayHeight = destW / ratio
    spr.setSize(destW, destW / ratio)
  }

  /**
   * 设置分数sprite的分数
   * @param {String|Number} score
   */
  setScoreText(score) {
    this.scoreSpr.setText(`score: ${score}`)
  }

  update() {}
}
