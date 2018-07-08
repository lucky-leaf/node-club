const Koa = require('koa')
const session = require('koa-session')
const CONFIG = require('../config')

const app = new Koa()
app.keys = CONFIG.keys

app.use(session(CONFIG.session, app))
app.use((ctx) => {
  if (ctx.path === '/favicon.ico') {
    return undefined
  }
  let n = ctx.session.views || 0
  ctx.session.views = ++n
  ctx.body = n + ' views'
})

app.listen(8080)
