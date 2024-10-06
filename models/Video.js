const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  iframe_url: String,
  thumbnail: String, // Added thumbnail field
  runtime: Number,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  channel: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' },
  cast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cast' }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  date_added: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video', videoSchema);
