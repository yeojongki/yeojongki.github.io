<template>
  <draggable class="drag-wrap" :list="list" ghostClass="ghost" :animation="animation" @change="handleChange">
    <div v-for="item in list" :key="item.id" :style="wrapStyle">
      <slot :item="item"></slot>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  props: {
    wrapStyle: [Object],
    animation: {
      type: Number,
      default: 750
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: { draggable },
  methods: {
    handleClick(i) {
      this.$emit('delete', i);
    },
    handleChange() {
      this.$emit('update:change', this.list);
    }
  }
};
</script>

<style lang="scss" scoped>
.drag-wrap {
  font-size: 0;
}
.ghost {
  opacity: 0;
}
</style>
