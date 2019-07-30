import Vue from 'vue'
import Vuex from '@/vuex'
// import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
