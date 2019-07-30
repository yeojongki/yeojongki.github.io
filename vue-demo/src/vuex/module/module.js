import { forEachValue } from '../util'

export default class Module {
  constructor(rawModule) {
    this._rawModule = rawModule
    this._children = Object.create(null)
    this.state = rawModule.state
  }

  getChild(key) {
    return this._children[key]
  }

  forEachChild(fn) {
    if (this._children) {
      forEachValue(this._children, fn)
    }
  }

  forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn)
    }
  }

  forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn)
    }
  }

  forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn)
    }
  }
}
