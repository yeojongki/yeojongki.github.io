import config from '../config'

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Over' })
    this.score = undefined
    this.bestScore = undefined
  }
  create() {
    // 背景
    let bg = this.add.image(0, 0, 'bg').setOrigin(0)
    bg.displayWidth = config.width
    bg.displayHeight = config.height

    // Over Tips
    this.add
      .text(this.cameras.main.centerX, 200, `Game Over`, {
        fontSize: '70px',
        fontFamily: 'Aril'
      })
      .setOrigin(0.5)

    // 得分
    this.add
      .text(this.cameras.main.centerX, 450, `你的得分是：${this.score}`, {
        fontSize: '55px',
        fontFamily: 'Aril'
      })
      .setOrigin(0.5)

    // 历史最佳得分
    this.add
      .text(this.cameras.main.centerX, 520, `历史最高：${this.bestScore || 0}`, {
        fontSize: '40px',
        fontFamily: 'Aril'
      })
      .setOrigin(0.5)

    // 点击空白重新开始
    this.add
      .text(this.cameras.main.centerX, 700, `点击任意地方重新开始`, {
        fontSize: '55px',
        fontFamily: 'Aril'
      })
      .setOrigin(0.5)

    this.input.on('pointerdown', () => this.scene.start('Game'))
  }

  init(data) {
    this.score = data.score
    this.bestScore = data.bestScore
  }
}
