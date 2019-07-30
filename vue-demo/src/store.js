import Vue from 'vue'
import Vuex from '@/vuex'
// import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a: {
      state: {
        value: 'aModule'
      },
      getters: {
        getAModule: state => state.value
      },
      modules: {
        subA: {
          state: {
            value: 'subAModule'
          }
        }
      }
    },
    b: {
      state: {
        value: 'bModule'
      }
    }
  },
  state: {
    count: 0
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    add(state, payload) {
      state.count += payload
    },
    decrease(state, payload) {
      state.count -= payload
    }
  },
  actions: {
    addAsync({ commit }, payload) {
      setTimeout(() => {
        commit('add', payload)
      }, 1000)
    }
  }
})
