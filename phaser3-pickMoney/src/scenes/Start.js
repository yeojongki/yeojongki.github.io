import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Start' })
  }
  create() {
    // 背景
    this.add.image(0, 0, 'bg').setOrigin(0)
    // 添加标题
    let titleSpr = this.add
      .text(this.cameras.main.centerX, 200, '元宝大作战', {
        fontFamily: 'Aril',
        fontSize: '50px',
        fontWeight: 'bold',
        fill: '#fff'
      })
      .setScale(0)
      .setOrigin(0.5)
      .setAlpha(0)
    this.tweens.add({
      targets: titleSpr,
      scaleX: 1,
      scaleY: 1,
      alpha: 1,
      duration: 700,
      ease: 'Power0'
    })

    // 添加开始按钮
    let startBtn = this.add
      .sprite(this.cameras.main.centerX, this.cameras.main.height * 0.5, 'startBtn')
      .setOrigin(0.5)
      .setInteractive()
    this.tweens.add({
      targets: startBtn,
      scaleX: 0.88,
      scaleY: 0.88,
      duration: 700,
      ease: 'linear',
      yoyo: true,
      loop: -1
    })
    // 注册点击事件
    startBtn.on('pointerdown', () => {
      this.sound.play('btn')
      setTimeout(() => {
        this.sound.play('bgm', { loop: true })
      }, 500)
      this.scene.start('Game')
    })
  }
}
