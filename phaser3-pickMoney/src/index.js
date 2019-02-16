import Phaser from 'phaser'
import { Boot, Game, Start } from 'scenes'

const config = {
  type: Phaser.AUTO,
  parent: 'container',
  width: 590,
  height: 1050,
  scale: {
    mode: Phaser.Scale.FIT
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300
      },
      debug: false
    }
  },
  scene: [Boot, Start, Game]
}

const game = new Phaser.Game(config) // eslint-disable-line no-unused-vars
