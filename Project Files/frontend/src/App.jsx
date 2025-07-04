import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CourseExplore from './components/user/student/CourseExplore';
import Login from './components/common/Login';
import Register from './components/common/Register';
import Home from './components/common/Home';
import Dashboard from './components/common/Dashboard';
import StudentHome from './components/user/student/StudentHome';
import TeacherHome from './components/user/teacher/TeacherHome';
import AdminHome from './components/admin/AdminHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student" element={<StudentHome />} />
        <Route path="/teacher" element={<TeacherHome />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/courses" element={<CourseExplore />} />
        
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
