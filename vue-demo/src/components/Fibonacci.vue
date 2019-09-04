<template>
  <div>
    <span v-if="n==0">{{v2}}</span>
    <span v-if="n==1">{{v1}}</span>
    <Fibonacci v-if="n>1" :n="n-1" :v1="v1+v2" :v2="v1" />
  </div>
</template>

<script>
export default {
  name: 'Fibonacci',
  props: {
    n: {
      type: Number,
      require: true
    },
    v1: {
      type: Number,
      default: 1
    },
    v2: {
      type: Number,
      default: 0
    }
  }
}
</script>
