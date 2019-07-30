import applyMixin from './mixin'
import ModuleCollection from './module/moduleCollection'

let Vue

export class Store {
  constructor(options = {}) {
    if (!Vue && typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }

    const state = options.state || Object.create(null)
    this._vm = new Vue({
      data: {
        $$state: state
      }
    })

    this._mutations = Object.create(null)
    this._actions = Object.create(null)
    this.getters = Object.create(null)

    this._modules = new ModuleCollection(options)
    installModule(this, this.state, [], this._modules.root)
  }

  get state() {
    return this._vm._data.$$state
  }

  set state(v) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`use store.replaceState() to explicit replace store state.`)
    }
  }

  commit = (type, payload) => {
    this._mutations[type].forEach(entry => {
      if (!entry) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(`[vuex] unknown mutation type: ${type}`)
        }
        return
      }
      entry(payload)
    })
  }

  dispatch = (type, payload) => {
    this._actions[type].forEach(entry => {
      if (!entry) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(`[vuex] unknown action type: ${type}`)
        }
        return
      }
      entry(payload)
    })
  }
}

function installModule(store, rootState, path, module) {
  const isRoot = !path.length

  // set state 👇
  // this.$store.state: {
  //  count: 10,
  //  a: {value:'aModule', subA: {value: 'subAModule'}},
  //  b: {value: 'bModule'}
  // }
  if (!isRoot) {
    let parentState = getNestedState(rootState, path.slice(0, -1))
    let moduleName = path[path.length - 1]
    Vue.set(parentState, moduleName, module.state)
  }

  module.forEachGetter((key, fn) => {
    Object.defineProperty(store.getters, key, {
      get() {
        return fn(module.state)
      }
    })
  })

  module.forEachMutation((key, fn) => {
    const entry = store._mutations[key] || (store._mutations[key] = [])
    entry.push(payload => {
      fn(module.state, payload)
    })
  })

  module.forEachAction((key, fn) => {
    const entry = store._actions[key] || (store._actions[key] = [])
    entry.push(payload => {
      fn(store, payload)
    })
  })

  module.forEachChild((key, childModule) => {
    installModule(store, rootState, path.concat(key), childModule)
  })
}

function getNestedState(state, path) {
  // [] {count:0}
  // [a] {count:0,  a:{value:'aModule'}}
  // [a, subA] {count: 0, a:{value:'moduleA', subA:{value:'subAModule'}}}
  // [b] {count: 0, a:{value:'moduleA', subA:{value:'subAModule', b:{value:'bModule'}}}}
  return path.length ? path.reduce((state, key) => state[key], state) : state
}

export function install(_Vue) {
  if (Vue && _Vue === Vue) {
    console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.')
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}
