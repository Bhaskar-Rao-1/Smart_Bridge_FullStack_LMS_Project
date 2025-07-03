const mongoose = require('mongoose');

const enrolledSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  progress: Number
});

module.exports = mongoose.model('Enrollment', enrolledSchema);
