module.exports = (router) => {
  router.get('/', async (ctx) => {
    const user = ctx.session.user
    await ctx.render('index', { user })
  })
}
