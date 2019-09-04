const extractName = name => {
  const reg = /src\/views\/(.*)\/index.vue$/
  name = name.match(reg)[1]
  if (!name) {
    throw new Error('无法提取路由名称，请检查!')
  }
  return name
}

const files = require.context('@/views', true, /index.vue$/)
const routes = files.keys().map(key => {
  const component = files(key).default
  // {
  //   path: '/vuex',
  //   name: 'vuex',
  //   component: () => import(/* webpackChunkName: "vuex" */ './views/vuex')
  // }
  const componentName = component.name || extractName(component.__file)
  return {
    path: `/${componentName}`,
    component,
    desc: component.desc || '',
    name: componentName
  }
})

export default routes
