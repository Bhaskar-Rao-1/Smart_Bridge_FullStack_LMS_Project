import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome to LearnHub</h1>
        <p style={styles.subtitle}>Your Center for Skill Enhancement</p>
        <div style={styles.buttonGroup}>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/register" style={styles.button}>Register</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/2022-01/iStock-622015126.jpg?itok=T446kMLS')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '3rem',
    borderRadius: '12px',
    textAlign: 'center',
    maxWidth: '500px',
    color: 'white',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    color: '#333',
    borderRadius: '5px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
