const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  // Reference to the user who made the payment
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  // Reference to the course purchased
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },

  // Payment amount
  amount: {
    type: Number,
    required: true,
    min: 0,
  },

  // Payment date
  date: {
    type: Date,
    default: Date.now,
  },

  // Optional: Payment status (success, failed, pending)
  status: {
    type: String,
    enum: ['success', 'pending', 'failed'],
    default: 'success',
  },

  // Optional: Transaction ID or reference number
  transactionId: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Payment', paymentSchema);
