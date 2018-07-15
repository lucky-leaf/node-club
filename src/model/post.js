const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  pv: {
    type: Number,
    default: 0
  },
  meta: {
    createdAt: {
      type: Date,
      defaut: Date.now
    },
    updatedAt: {
      type: Date,
      defaut: Date.now
    }
  }
})

PostSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.updatedAt = Date.now()
  }
  next()
})

module.exports = mongoose.model('Post', PostSchema)
