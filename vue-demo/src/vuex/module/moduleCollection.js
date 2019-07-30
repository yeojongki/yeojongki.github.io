import Module from './module'
import { forEachValue } from '../util'

export default class ModuleCollection {
  constructor(rawModule) {
    this.register([], rawModule)
  }

  register(path, rawModule) {
    const newModule = new Module(rawModule)

    if (path.length === 0) {
      this.root = newModule
    } else {
      const parent = this.get(path.slice(0, -1))
      parent._children[path[path.length - 1]] = newModule
    }

    if (rawModule.modules) {
      forEachValue(rawModule.modules, (moduleName, value) => {
        this.register(path.concat(moduleName), value)
      })
    }
  }

  get(path) {
    return path.reduce((module, key) => {
      return module.getChild([key])
    }, this.root)
  }
}
