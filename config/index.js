module.exports = {
  keys: ['Node.js'],
  port: 8080,
  mongodb: {
    url: 'mongodb://test:123456@106.14.166.125:41030/test',
    authSource: 'test'
  },
  session: {
    key: 'sid',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false
  }
}
