import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import _routes from './routes'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

export default new Router({
  routes: routes.concat(_routes)
})
