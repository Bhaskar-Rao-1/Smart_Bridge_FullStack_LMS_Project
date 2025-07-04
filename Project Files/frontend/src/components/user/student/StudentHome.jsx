import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentHome = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/student/${user._id}`);
        setCourses(res.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user && user._id) {
      fetchEnrolledCourses();
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) return <p style={styles.container}>Loading...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.header}>
          <h2>Welcome, {user?.name}</h2>
          <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>

        <h3>Your Enrolled Courses</h3>

        {courses.length === 0 ? (
          <div>
            <p style={styles.noCourses}>You haven’t enrolled in any courses yet.</p>
            <button style={styles.button} onClick={() => navigate('/courses')}>
              Enroll in Courses
            </button>
          </div>
        ) : (
          <ul style={styles.courseList}>
            {courses.map((course) => (
              <li key={course._id} style={styles.courseCard}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p><strong>Price:</strong> {course.price === 0 ? 'Free' : `₹${course.price}`}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  overlay: {
    backgroundColor: 'rgba(239, 241, 249, 0.5)',
    padding: '2rem',
    borderRadius: '15px',
    maxWidth: '800px',
    width: '100%',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  noCourses: {
    fontStyle: 'italic',
    fontSize: '18px',
    marginTop: '1rem',
  },
  courseList: {
    listStyle: 'none',
    padding: 0,
  },
  courseCard: {
    backgroundColor: '#f1f1f1',
    padding: '1rem',
    borderRadius: '10px',
    marginBottom: '1rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  button: {
    marginTop: '1rem',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default StudentHome;
