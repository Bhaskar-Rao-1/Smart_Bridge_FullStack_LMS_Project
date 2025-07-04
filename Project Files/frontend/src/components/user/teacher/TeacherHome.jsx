import React from 'react';

const TeacherHome = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Teacher Dashboard</h2>
      <p style={styles.subText}>Upload and manage your courses here.</p>

      <div style={styles.placeholder}>
        <p style={styles.placeholderText}>📚 Course management features coming soon!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    color: '#333',
  },
  subText: {
    fontSize: '1.2rem',
    color: '#555',
  },
  placeholder: {
    marginTop: '2rem',
    padding: '2rem',
    border: '2px dashed #ccc',
    borderRadius: '10px',
    backgroundColor: '#f8f8f8',
  },
  placeholderText: {
    fontSize: '1rem',
    color: '#888',
  },
};

export default TeacherHome;
