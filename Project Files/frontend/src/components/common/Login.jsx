import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
        role,
      });

      if (res.data?.user) {
        const user = res.data.user;
        localStorage.setItem('user', JSON.stringify(user));

        const routeMap = {
          admin: '/admin',
          teacher: '/teacher',
          student: '/student',
        };
        navigate(routeMap[user.role] || '/student');
      } else {
        alert('Login failed: Invalid response from server.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert(error.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h2>Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

          <div style={styles.roleToggle}>
            {['student', 'teacher', 'admin'].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                style={role === r ? styles.activeRole : styles.roleBtn}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Login</button>
          </form>

          <p style={{ marginTop: '1rem' }}>
            Don’t have an account?{' '}
            <Link to="/register" style={styles.link}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://www.skilllake.com/wp-content/uploads/2024/12/Blended-Learning-LMS.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  roleToggle: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  roleBtn: {
    padding: '0.5rem 1rem',
    border: '1px solid #ccc',
    backgroundColor: '#eee',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  activeRole: {
    padding: '0.5rem 1rem',
    border: '1px solid #007bff',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Login;
