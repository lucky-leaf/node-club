module.exports = () => {
  const key = 'flash'
  return async (ctx, next) => {
    if (!ctx.session) {
      throw new Error('ctx.session is required')
    }
    let data = ctx.session[key]
    ctx.session[key] = null
    Object.defineProperty(ctx, 'flash', {
      enumerable: true,
      get () {
        return data
      },
      set (value) {
        ctx.session[key] = value
      }
    })
    await next()
  }
}
