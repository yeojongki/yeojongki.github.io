import Phaser from 'phaser'
import { Boot, Game, Start, Over } from 'scenes'
import CONFIG from './config'

const config = {
  type: Phaser.AUTO,
  parent: 'App',
  width: CONFIG.width,
  height: CONFIG.height,
  scale: {
    mode: Phaser.Scale.FIT
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 800
      },
      debug: false
    }
  },
  scene: [Boot, Start, Game, Over]
}

const game = new Phaser.Game(config) // eslint-disable-line no-unused-vars
