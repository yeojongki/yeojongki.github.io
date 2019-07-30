<template>
  <div>
    <p>state count: {{$store.state.count}}</p>
    <p>getters count: {{$store.getters.count}}</p>
    <p>A module getters: {{$store.getters.getAModule}}</p>
    <p>A module state: {{$store.state.a.value}}</p>
    <input type="number" v-model.number="num" />
    <button @click="add">add</button>
    <button @click="addAsync">addAsync</button>
    <button @click="decrease">decrease</button>
  </div>
</template>

<script>
export default {
  name: 'vuex',
  desc: '实现vuex',
  mounted() {
    // console.log(this.$store)
  },
  data() {
    return {
      num: 1
    }
  },
  methods: {
    add() {
      this.$store.commit('add', this.num)
    },
    decrease() {
      this.$store.commit('decrease', this.num)
    },
    addAsync() {
      this.$store.dispatch('addAsync', this.num)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
