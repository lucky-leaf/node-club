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
      ctx.flash = {
        error: '用户名不存在！'
      }
      await ctx.render('signin')
      return
    }
    if (!(await bcrypt.compare(password, user.password))) {
      ctx.flash = {
        error: '密码错误！'
      }
      await ctx.render('signin')
      return
    }
    ctx.session.user = {
      name: user.name,
      email: user.email
    }
    ctx.flash = {
      success: '登录成功！'
    }
    await ctx.render('signin')
  })
}
