// routes/admin.js
const express = require('express');
const router = express.Router();
const Video = require('../models/Video');
const Category = require('../models/Category');
const Cast = require('../models/Cast');
const Channel = require('../models/Channel');

// Video CRUD Operations
// Get all videos
router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find().populate('category').populate('cast').populate('channel');
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new video
router.post('/videos', async (req, res) => {
    const { title, description, iframe_url, thumbnail, runtime, category, cast, channel } = req.body;
    const newVideo = new Video({ title, description, iframe_url, thumbnail, runtime, category, cast, channel });

    try {
        const savedVideo = await newVideo.save();
        res.status(201).json(savedVideo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a video
router.put('/videos/:id', async (req, res) => {
    try {
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedVideo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a video
router.delete('/videos/:id', async (req, res) => {
    try {
        await Video.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Category CRUD Operations
// Get all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new category
router.post('/categories', async (req, res) => {
    const { name, thumbnail } = req.body;
    const newCategory = new Category({ name, thumbnail });

    try {
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a category
router.put('/categories/:id', async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a category
router.delete('/categories/:id', async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Cast CRUD Operations
// Get all casts
router.get('/casts', async (req, res) => {
    try {
        const casts = await Cast.find();
        res.json(casts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new cast
router.post('/casts', async (req, res) => {
    const { name, thumbnail } = req.body;
    const newCast = new Cast({ name, thumbnail });

    try {
        const savedCast = await newCast.save();
        res.status(201).json(savedCast);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a cast
router.put('/casts/:id', async (req, res) => {
    try {
        const updatedCast = await Cast.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCast);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a cast
router.delete('/casts/:id', async (req, res) => {
    try {
        await Cast.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Channel CRUD Operations
// Get all channels
router.get('/channels', async (req, res) => {
    try {
        const channels = await Channel.find();
        res.json(channels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new channel
router.post('/channels', async (req, res) => {
    const { name, thumbnail } = req.body;
    const newChannel = new Channel({ name, thumbnail });

    try {
        const savedChannel = await newChannel.save();
        res.status(201).json(savedChannel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a channel
router.put('/channels/:id', async (req, res) => {
    try {
        const updatedChannel = await Channel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedChannel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a channel
router.delete('/channels/:id', async (req, res) => {
    try {
        await Channel.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
