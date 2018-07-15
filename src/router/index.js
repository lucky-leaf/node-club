const Router = require('koa-router')
const router = new Router()
const { home, sign } = require('../controller')

router.get('/', home.index)
router.get('/signin', sign.signinGet)
router.post('/signin', sign.signinPost)
router.get('/signup', sign.signupGet)
router.post('/signup', sign.signupPost)
router.get('/signout', sign.signout)

module.exports = router
