module.exports = (router) => {
  router.get('/signout', (ctx) => {
    ctx.session = null
    ctx.redirect('/')
  })
}
