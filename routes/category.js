const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Video = require('../models/Video');

// Get all categories
router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// Get videos by category
router.get('/:id/videos', async (req, res) => {
  const videos = await Video.find({ category: req.params.id }).populate('channel cast').exec();
  res.json(videos);
});

module.exports = router;
