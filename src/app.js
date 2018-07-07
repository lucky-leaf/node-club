const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

app.use(async (ctx, next) => {
  ctx.body = 'Hello Koa'
})

app.listen(8080, () => {
  console.log('server is running...')
})
