const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
  name: String,
  profile_picture: String,
});

module.exports = mongoose.model('Cast', castSchema);
