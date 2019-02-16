import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' })
  }

  preload() {
    let progressText = this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY, '0%', {
        fontSize: '50px',
        fill: '#fff'
      })
      .setOrigin(0.5)
    this.load.on('progress', progress => {
      progressText.text = `${Math.round(progress * 100)}%`
    })

    // 加载图片
    this.load.image('bg', require('images/bg.jpg'))
    this.load.image('startBtn', require('images/start-btn.png'))
    this.load.image('cat', require('images/cat.png'))
    this.load.image('bomb', require('images/bomb.png'))
    this.load.image('yb1', require('images/icon1.png'))
    this.load.image('yb2', require('images/icon2.png'))
    this.load.image('yb3', require('images/load-icon.png'))
    this.load.image('one', require('images/one.png'))
    this.load.image('three', require('images/three.png'))
    this.load.image('five', require('images/five.png'))

    // 加载音频
    this.load.audio('bgm', require('audios/bgm.mp3'))
    this.load.audio('addscore', require('audios/addscore.mp3'))
    this.load.audio('boom', require('audios/boom.mp3'))
    this.load.audio('btn', require('audios/btn.mp3'))
  }

  create() {
    this.scene.start('Start')
  }
}
