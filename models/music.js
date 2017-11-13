const mongoose = require('mongoose')

const Schema = mongoose.Schema

const musicSchema = new Schema({
  name: String,
  artist: String,
  musicStyle: String,
})

module.exports = mongoose.model('Music', musicSchema)
