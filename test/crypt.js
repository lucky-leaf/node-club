const bcrypt = require('bcryptjs')

const gen = async () => {
  try {
    const salt = await bcrypt.genSalt(8)
    console.log(`salt: ${salt}`)
    const password = '123456'
    const hashSalt = await bcrypt.hash(password, salt)
    console.log(`hash: ${hashSalt}`)
    const result = await bcrypt.compare(password, hashSalt)
    console.log(`result: ${result}`)
  } catch (error) {
    console.log(error.message)
  }
}

gen()
