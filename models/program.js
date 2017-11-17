const mongoose = require('mongoose')

const Schema = mongoose.Schema

const programSchema = new Schema({
  name: String,
  icon: String,
})

module.exports = mongoose.model('Program', programSchema)
