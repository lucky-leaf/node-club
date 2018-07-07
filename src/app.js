const path = require('path')
const Koa = require('koa')
const view = require('koa-view')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = require('./router')

app.use(bodyParser())
app.use(serve(path.join(__dirname, 'public')))
app.use(view(path.join(__dirname, 'view')))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8080, () => {
  console.log('server is running...')
})
