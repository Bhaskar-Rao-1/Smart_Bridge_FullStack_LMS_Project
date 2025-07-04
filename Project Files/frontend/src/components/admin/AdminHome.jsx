import React, { useState } from 'react';
import axios from 'axios';

const AdminHome = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/courses', {
        title,
        description,
        price,
      });

      alert('Course uploaded successfully');
      setTitle('');
      setDescription('');
      setPrice('');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Course upload failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Admin Dashboard</h2>
      <p>Manage users, courses, and platform settings here.</p>

      <form onSubmit={handleUpload} style={styles.form}>
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={styles.input}
        />
        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={styles.textarea}
        />
        <input
          type="number"
          placeholder="Price (0 for free)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Upload Course</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '2rem',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    height: '100px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AdminHome;
