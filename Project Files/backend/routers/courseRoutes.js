const express = require('express');
const router = express.Router();
const { createCourse, getCourses } = require('../controllers/courseController');
const User = require('../schemas/userModel');

// Existing routes
router.post('/', createCourse);
router.get('/', getCourses);

// 🆕 Enrollment route
router.post('/enroll', async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check if already enrolled
    if (user.enrolledCourses.includes(courseId)) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    user.enrolledCourses.push(courseId);
    await user.save();

    res.json({ message: 'Enrolled successfully' });
  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({ message: 'Enrollment failed' });
  }
});

module.exports = router;
