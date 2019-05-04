const files = require.context('@/views', true, /index.js$/)
const routes = files.keys().map(key => files(key).default)

export default routes
