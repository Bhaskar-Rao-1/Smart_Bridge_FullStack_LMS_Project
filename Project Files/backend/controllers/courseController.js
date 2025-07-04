const Course = require('../schemas/courseModel');

exports.createCourse = async (req, res) => {
  const { title, description, teacher } = req.body;

  try {
    const newCourse = new Course({ title, description, teacher });
    await newCourse.save();
    res.status(201).json({ message: 'Course created', course: newCourse });
  } catch (error) {
    console.error('Create course error:', error);
    res.status(500).json({ message: 'Failed to create course' });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
};
