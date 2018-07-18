const { User, Post } = require('../model')

const post = {
  index: async (ctx) => {
    await ctx.render('create', {
      title: '发布文章'
    })
  },

  create: async (ctx) => {
    const user = await User.findOne({ name: ctx.session.user.name })
    let { title, content } = ctx.request.body
    if (title && content) {
      const result = await Post.create({ title, content, author: user._id })
      ctx.redirect(`/post/${result._id}`)
    } else {
      ctx.flash = {
        error: '文章内容不全，请补充'
      }
      await ctx.render('create', {
        title: '发布文章'
      })
    }
  },

  show: async (ctx) => {
    const post = await Post.findById(ctx.params.id).populate({ path: 'author', select: 'name' })
    await ctx.render('post', {
      title: post.title,
      post
    })
  }
}

module.exports = post
