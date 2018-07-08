const Router = require('koa-router')
const router = new Router()

const home = require('./home')
const signin = require('./signin')
const signup = require('./signup')

home(router)
signin(router)
signup(router)

module.exports = router
