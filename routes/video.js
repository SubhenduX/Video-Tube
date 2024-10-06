const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// Get all videos with pagination
router.get('/', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const videos = await Video.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .populate('channel category cast')
    .exec();
  const count = await Video.countDocuments();
  res.json({
    videos,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  });
});

// Get video by ID
router.get('/:id', async (req, res) => {
  const video = await Video.findById(req.params.id)
    .populate('channel category cast')
    .exec();
  res.json(video);
});

module.exports = router;
