const Router = require('koa-router')
const router = new Router()

const home = require('./home')
const signin = require('./signin')
const signup = require('./signup')
const signout = require('./signout')

home(router)
signin(router)
signup(router)
signout(router)

module.exports = router
