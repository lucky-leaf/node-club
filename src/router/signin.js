const bcrypt = require('bcryptjs')
const { UserService } = require('../service')

module.exports = (router) => {
  router.get('/signin', async (ctx) => {
    await ctx.render('signin', {
      title: '用户登录'
    })
  })

  router.post('/signin', async (ctx, next) => {
    const { name, password } = ctx.request.body
    const user = await UserService.findUser({ name })
    if (!user) {
      ctx.body = '该用户不存在'
      return undefined
    }
    if (!(await bcrypt.compare(password, user.password))) {
      ctx.body = '密码错误'
      return undefined
    }
    ctx.session.user = {
      name: user.name,
      email: user.email
    }
    await ctx.redirect('/', { user: ctx.session.user })
  })
}
