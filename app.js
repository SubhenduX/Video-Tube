const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const videoRoutes = require('./routes/video');
const categoryRoutes = require('./routes/category');
const castRoutes = require('./routes/cast');
const channelRoutes = require('./routes/channel');
const adminRoutes = require('./routes/admin');

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: '*', // Allow all origins or specify a specific domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add methods as needed
  credentials: true // Optional, if you're using cookies or HTTP authentication
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Video Tube API!'); // You can customize this message
});

// Routes
app.use('/api/videos', videoRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/casts', castRoutes);
app.use('/api/channels', channelRoutes);
app.use('/api/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
