<template>
  <div id="app">
    <SortCells itemCls="sort-cell" :list.sync="list" :wrapStyle="{display: 'inline-block'}">
      <template slot-scope="data">
        <div
          class="cell-item"
          :style="{backgroundImage:`url(${data.item.url})`}"
          @click="handleClick(data.item.url, id)"
        >
          <button class="cell-item__del" @click.stop="handleDelete(data.item.id)">×</button>
        </div>
      </template>
    </SortCells>
  </div>
</template>

<script>
import SortCells from './components/SortCells.vue';

const List = Array.from({ length: 9 }, (e, i) => {
  return {
    id: i,
    url: `//iph.href.lu/${(i + 1) * 100}x${(i + 1) * 100}`
  };
});

export default {
  name: 'app',
  components: {
    SortCells
  },
  data() {
    return {
      list: List
    };
  },
  methods: {
    handleDelete(id) {
      this.list = this.list.filter(item => item.id !== id);
    },
    handleClick(url, id) {
      alert(`click url: ${url}`);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.cell-item {
  position: relative;
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: 0 10px 10px 0;
  background-repeat: no-repeat;
  background-size: contain;
  &__del {
    outline: none;
    font-size: 16px;
    position: absolute;
    right: -10px;
    top: -10px;
    z-index: 1;
    border: 0;
    color: #666;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
}
</style>
