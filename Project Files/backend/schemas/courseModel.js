const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  // Title of the course
  title: {
    type: String,
    required: true,
    trim: true,
  },

  // Short description
  description: {
    type: String,
    required: true,
    trim: true,
  },

  // Instructor name (admin by default)
  instructor: {
    type: String,
    default: 'Admin',
  },

  // Content (can be list of topics, modules, or video links)
  content: {
    type: [String],
    default: [],
  },

  // Enrolled students (referencing User model)
  studentsEnrolled: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },

  // Optional image for course card
  image: {
    type: String,
    default: 'https://via.placeholder.com/150',
  },

  // Category field for filtering
  category: {
    type: String,
    enum: ['Web', 'AI', 'Data Science', 'Java', 'Other'],
    default: 'Other',
  },

  // Course creation date
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Course', courseSchema);
