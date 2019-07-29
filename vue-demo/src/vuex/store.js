import applyMixin from './mixin'
import { forEachValue } from './util'

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
    this.getters = Object.create(null)

    let mutations = options.mutations || Object.create(null)
    forEachValue(mutations, (key, fn) => {
      this._mutations[key] = payload => {
        fn(this.state, payload)
      }
    })

    let getters = options.getters || Object.create(null)
    forEachValue(getters, (key, fn) => {
      Object.defineProperty(this.getters, key, {
        get: () => fn(this.state),
        enumerable: true
      })
    })
  }

  get state() {
    return this._vm._data.$$state
  }

  set state(v) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`use store.replaceState() to explicit replace store state.`)
    }
  }

  commit(type, payload) {
    const entry = this._mutations[type]
    if (!entry) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(`[vuex] unknown mutation type: ${type}`)
      }
      return
    }
    entry(payload)
  }
}

export function install(_Vue) {
  if (Vue && _Vue === Vue) {
    console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.')
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}
