const { Post } = require('../model')

const createPost = async (post) => {
  return Post.create(post)
}

module.exports = { createPost }
