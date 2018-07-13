const path = require('path')
const Koa = require('koa')
const view = require('koa-nunjucks-2')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const { flash } = require('./middleware')
const CONFIG = require('../config')

const app = new Koa()
const router = require('./router')

app.keys = CONFIG.keys

app.use(bodyParser())
app.use(serve(path.join(__dirname, 'public')))
app.use(view({
  ext: 'html',
  path: path.join(__dirname, 'view')
}))
app.use(session(CONFIG.session, app))
app.use(async (ctx, next) => {
  ctx.state.session = ctx.session
  await next()
})
app.use(flash())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8080, () => {
  console.log('server is running...')
})
