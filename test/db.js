const mongoose = require('mongoose')
const { mongodb } = require('../config')

mongoose.connect(mongodb.url, { authSource: mongodb.authSource, useNewUrlParser: true })
