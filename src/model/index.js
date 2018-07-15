const mongoose = require('mongoose')
const { mongodb } = require('../../config')

mongoose.connect(mongodb.url, {
  authSource: mongodb.authSource,
  useNewUrlParser: true
})

const connection = mongoose.connection
connection.on('error', console.error.bind(console, 'connected failed!'))

exports.User = require('./user')
exports.Post = require('./post')
