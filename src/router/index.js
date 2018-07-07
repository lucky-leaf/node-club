const Router = require('koa-router')
const router = new Router()

const home = require('./home')
const signup = require('./signup')

home(router)
signup(router)

module.exports = router
