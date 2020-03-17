const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const DrinkSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  },
  date: {
    type: String
  }
});

module.exports = Drink = mongoose.model('drinks', DrinkSchema)