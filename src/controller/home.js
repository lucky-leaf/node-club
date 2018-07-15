const home = {
  index: async (ctx) => {
    await ctx.render('home')
  }
}

module.exports = home
