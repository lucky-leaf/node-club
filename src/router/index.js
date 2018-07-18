const Router = require('koa-router')
const router = new Router()
const { home, signin, signup, signout, post } = require('../controller')

router.get('/', home.index)
router.get('/signin', signin.index)
router.post('/signin', signin.signin)
router.get('/signup', signup.index)
router.post('/signup', signup.signup)
router.get('/signout', signout.index)

router.get('/post/create', post.index)
router.post('/post/create', post.create)

module.exports = router
