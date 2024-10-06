const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  thumbnail: String,
  views: { type: Number, default: 0 },
});

module.exports = mongoose.model('Category', categorySchema);
