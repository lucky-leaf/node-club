const bcrypt = require('bcryptjs')
const { User } = require('../model')

module.exports = {
  index: async ctx => {
    await ctx.render('signin', {
      title: '用户登录'
    })
  },

  signin: async (ctx, next) => {
    const { name, password } = ctx.request.body
    const user = await User.findOne({ name })
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
    ctx.redirect('/')
  }
}
