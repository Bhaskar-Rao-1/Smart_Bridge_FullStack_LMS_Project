// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Root test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
