const express = require('express');
const router = express.Router();
const Channel = require('../models/Channel');

// Get all channels
router.get('/', async (req, res) => {
  const channels = await Channel.find();
  res.json(channels);
});

// Get videos by channel
router.get('/:id/videos', async (req, res) => {
  const videos = await Video.find({ channel: req.params.id }).populate('category cast').exec();
  res.json(videos);
});

module.exports = router;
