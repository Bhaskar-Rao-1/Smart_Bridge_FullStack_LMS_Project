const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  materials: [String],
});

module.exports = mongoose.model('Course', courseSchema);

