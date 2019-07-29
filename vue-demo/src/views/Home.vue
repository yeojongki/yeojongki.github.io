<template>
  <div class="home">
    <ul>
      <li class="line" v-for="route in routes" :key="route.name">
        <router-link :to="route.path">{{route.desc||route.name}}：{{route.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from '@/routes'
Object.freeze(routes)

export default {
  name: 'home',
  data() {
    return {
      routes: routes
    }
  }
}
</script>

<style scoped>
.line {
  text-align: left;
}
</style>
