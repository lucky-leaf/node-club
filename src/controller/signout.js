module.exports = {
  index: async ctx => {
    ctx.session.user = null
    ctx.flash = {
      success: '退出成功！'
    }
    ctx.redirect('/')
  }
}
