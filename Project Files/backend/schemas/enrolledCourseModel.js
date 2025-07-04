const mongoose = require('mongoose');

const enrolledSchema = new mongoose.Schema({
  // Reference to the enrolled user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  // Reference to the enrolled course
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },

  // Course progress as a percentage (0–100)
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },

  // Optional: Date of enrollment
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Enrollment', enrolledSchema);
