const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  name: String,
  logo: String,
  views: { type: Number, default: 0 },
});

module.exports = mongoose.model('Channel', channelSchema);
