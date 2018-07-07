const mongoose = require('mongoose')
const { mongodb } = require('../config')

mongoose.connect(mongodb.url, { authSource: mongodb.authSource, useNewUrlParser: true })

let connection = mongoose.connection

connection.on('error', () => {
  console.error('connection error:')
})

connection.once('open', function () {
  console.log('connected successfully!')
  let kittySchema = mongoose.Schema({
    name: String
  })
  let Kitten = mongoose.model('Kitten', kittySchema)
  let silence = new Kitten({
    name: 'Silence'
  })
  let fluffy = new Kitten({
    name: 'fluffy'
  })

  Promise.all([silence.save(), fluffy.save()]).then((value) => {
    console.log(value)
  }).catch((error) => {
    throw error
  })
})
