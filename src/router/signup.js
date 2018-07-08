const bcrypt = require('bcryptjs')
const { UserService } = require('../service')

module.exports = (router) => {
  router.get('/signup', async (ctx) => {
    await ctx.render('signup', {
      title: '用户注册'
    })
  })

  router.post('/signup', async (ctx) => {
    let { name, email, password, repassword } = ctx.request.body
    if (password !== repassword) {
      await ctx.render('signup')
      return undefined
    }
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password, salt)
    const user = { name, email, password }
    const result = await UserService.createUser(user)
    ctx.body = result
  })
}
