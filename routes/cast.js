const express = require('express');
const router = express.Router();
const Cast = require('../models/Cast');

// Get all casts
router.get('/', async (req, res) => {
  const casts = await Cast.find();
  res.json(casts);
});

// Get videos by cast
router.get('/:id/videos', async (req, res) => {
  const videos = await Video.find({ cast: req.params.id }).populate('channel category').exec();
  res.json(videos);
});

module.exports = router;
