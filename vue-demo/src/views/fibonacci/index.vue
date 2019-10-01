<template>
  <div>
    <div :style="{'margin': '10px','fontWeight':'bold'}">
      input number:
      <input v-model="input" />
    </div>
    <Fibonacci :n="numberInput" />
  </div>
</template>

<script>
import Fibonacci from '@/components/Fibonacci'

export default {
  name: 'fibonacci',
  desc: '递归组件',
  data() {
    return {
      input: 7
    }
  },
  computed: {
    numberInput() {
      return Number(this.input)
    }
  },
  components: {
    Fibonacci
  }
}
</script>
