module.exports = (router) => {
  router.get('/signup', async (ctx) => {
    await ctx.render('signup')
  })
  router.post('/signup', async (ctx) => {
    ctx.body = 'signup post'
  })
}
