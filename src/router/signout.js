module.exports = (router) => {
  router.get('/signout', (ctx) => {
    ctx.session.user = null
    ctx.flash = {
      success: '退出成功！'
    }
    ctx.redirect('/')
  })
}
