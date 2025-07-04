import React from 'react';

const courses = [
  {
    id: '1',
    title: 'Web Development Bootcamp',
    category: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript, React and Node.js.',
    price: 0,
    image: 'https://www.nexel.in/media/blog_images/web_development_Z62jy4k.jpg',
  },
  {
    id: '2',
    title: 'Artificial Intelligence Fundamentals',
    category: 'AI',
    description: 'Dive into problem solving with AI algorithms and tools.',
    price: 499,
    image: 'https://cdn.ceps.eu/wp-content/uploads/2024/07/vecteezy_ai-generated-ai-circuit-board-technology-background_37348385-scaled.jpg',
  },
  {
    id: '3',
    title: 'Machine Learning A-Z',
    category: 'ML',
    description: 'Master machine learning using Python and Scikit-learn.',
    price: 599,
    image: 'https://www.ceo-review.com/wp-content/uploads/2021/10/Machine-Learning.jpg',
  },
  {
    id: '4',
    title: 'Deep Learning with TensorFlow',
    category: 'DL',
    description: 'Build neural networks and learn deep learning basics.',
    price: 699,
    image: 'https://resources.osservatori.net/wp-content/uploads/2025/04/deep-learning-significato.jpg',
  },
  {
    id: '5',
    title: 'Python for Beginners',
    category: 'Programming',
    description: 'Start coding with Python from scratch.',
    price: 0,
    image: 'https://prahladyeri.github.io/uploads/code-python.jpg',
  },
  {
    id: '6',
    title: 'React.js Crash Course',
    category: 'Web Development',
    description: 'Build powerful UIs with React and hooks.',
    price: 349,
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*KLECKuR2MtD8PKJf.jpg',
  },
  {
    id: '7',
    title: 'Natural Language Processing',
    category: 'AI',
    description: 'Understand text and build NLP pipelines.',
    price: 799,
    image: 'https://www.searchenginejournal.com/wp-content/uploads/2020/08/an-introduction-to-natural-language-processing-with-python-for-seos-5f3519eeb8368.png',
  },
  {
    id: '8',
    title: 'Computer Vision with OpenCV',
    category: 'DL',
    description: 'Use OpenCV for image recognition and processing.',
    price: 699,
    image: 'https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_white_600x.png',
  },
];


const CourseExplore = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleEnroll = async (courseId) => {
    try {
      await axios.post(`http://localhost:5000/api/courses/enroll`, {
        courseId,
        userId: user._id,
      });
      alert('Enrolled successfully!');
    } catch (err) {
      alert('Enrollment failed.');
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Explore Courses</h2>
      <div style={styles.grid}>
        {courses.map(course => (
          <div key={course.id} style={styles.card}>
            <img src={course.image} alt={course.title} style={styles.image} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>{course.price === 0 ? 'Free' : `₹${course.price}`}</strong></p>
            <button style={styles.button} onClick={() => handleEnroll(course.id)}>Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1100px',
    margin: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CourseExplore;
