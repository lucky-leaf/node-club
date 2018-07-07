const { User } = require('../model')

const createUser = async (user) => {
  return User.create(user)
}

module.exports = { createUser }
