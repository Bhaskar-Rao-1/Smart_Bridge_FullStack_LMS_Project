import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);

    axios.get('/api/courses')
      .then((res) => setCourses(res.data))
      .catch((err) => console.error('Failed to load courses:', err));
  }, []);

  if (!user) return <p style={styles.loading}>Loading user...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        {user.role === 'teacher' ? 'Teacher Dashboard' : 'Student Dashboard'}
      </h2>

      {user.role === 'student' && (
        <>
          <h3>Available Courses</h3>
          {courses.length === 0 ? (
            <p>No courses available</p>
          ) : (
            courses.map((course) => (
              <div key={course._id} style={styles.card}>
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <p><strong>{course.price === 0 ? 'Free' : `₹${course.price}`}</strong></p>
                <button style={styles.button}>Join Course</button>
              </div>
            ))
          )}
        </>
      )}

      {user.role === 'teacher' && (
        <>
          <h3>Your Teaching Panel</h3>
          <p>You can manage and add your courses here.</p>
          {/* Link to upload or manage courses if available */}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: 'auto',
  },
  header: {
    color: '#007bff',
    marginBottom: '1rem',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  loading: {
    textAlign: 'center',
    marginTop: '3rem',
    fontSize: '18px',
  },
};

export default Dashboard;
