const files = require.context('@/views', true, /index.vue$/)
const routes = files.keys().map(key => {
  const component = files(key).default
  // {
  //   path: '/vuex',
  //   name: 'vuex',
  //   component: () => import(/* webpackChunkName: "vuex" */ './views/vuex')
  // }
  const componentName = component.name
  return {
    path: `/${componentName}`,
    component,
    desc: component.desc || '',
    name: componentName
  }
})

export default routes
