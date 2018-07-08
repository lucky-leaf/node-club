const { User } = require('../model')

const createUser = async (user) => {
  return User.create(user)
}

const findUser = async (user) => {
  return User.findOne(user)
}

module.exports = { createUser, findUser }
