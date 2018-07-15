const bcrypt = require('bcryptjs')
const { UserService } = require('../service')

const sign = {}
sign.signinGet = async ctx => {
  await ctx.render('signin')
}

sign.signinPost = async (ctx, next) => {
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
  ctx.redirect('/')
}

sign.signout = async ctx => {
  ctx.session.user = null
  ctx.flash = {
    success: '退出成功！'
  }
  ctx.redirect('/')
}

sign.signupGet = async ctx => {
  await ctx.render('signup', {
    title: '用户注册'
  })
}

sign.signupPost = async ctx => {
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
  await UserService.createUser(user)
  ctx.session.user = { name, email }
  ctx.redirect('/')
}

module.exports = sign
