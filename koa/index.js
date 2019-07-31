// const Koa = require('koa')
const Koa = require('./lib/application')
const app = new Koa()

const sleep = (time = 1000) => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

app.use(async (_, next) => {
  console.log(1)
  await next()
  console.log(2)
})

app.use(async (_, next) => {
  console.log(3)
  await next()
  console.log(4)
})

app.use(async (ctx, next) => {
  console.log(5)
  await next()
  await sleep(1000)
  ctx.body = 'after 1s...'
})

app.listen(3004, () => {
  console.log(`server start: http://localhost:${process.env.PORT || 3004}/`)
})

// will log: 1 3 5 4 2
