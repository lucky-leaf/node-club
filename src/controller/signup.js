const bcrypt = require('bcryptjs')
const { User } = require('../model')

module.exports = {
  index: async ctx => {
    await ctx.render('signup', {
      title: '用户注册'
    })
  },

  signup: async ctx => {
    let { name, email, password, repassword } = ctx.request.body
    if (password !== repassword) {
      ctx.flash = {
        error: '密码不一致，请重新输入'
      }
      return ctx.redirect('back')
    }
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password, salt)
    const user = { name, email, password }
    await User.create(user)
    ctx.session.user = { name, email }
    ctx.redirect('/')
  }
}
