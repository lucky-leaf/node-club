module.exports = {
  index: async ctx => {
    await ctx.render('home', {
      title: '主页'
    })
  }
}
