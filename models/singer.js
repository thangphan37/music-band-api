const mongoose = require('mongoose')
const {songSchema} = require('./song')
const {historySchema} = require('./history')
const {Schema} = mongoose

const singerSchema = new Schema({
  name: String,
  avatar: String,
  songs: [songSchema],
  history: [historySchema],
  updatedAt: {type: Date, default: Date.now},
})

const Singer = mongoose.model('Singer', singerSchema)

module.exports = Singer
