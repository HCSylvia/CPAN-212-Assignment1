import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import AddStudent from './components/AddStudent';
import StudentManagement from './components/StudentManagement';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-brand">Student Course Manager</div>
          <div className="nav-links">
            <Link to="/">Dashboard</Link>
            <Link to="/add-course">Add Course</Link>
            <Link to="/add-student">Add Student</Link>
            <Link to="/students">Students</Link>
            <Link to="/courses">Courses</Link>
          </div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/" element={<StudentManagement />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/courses" element={<CourseList />} />
          </Routes>
        </main>
      </div>  
    </Router>
  );
}

export default App;
