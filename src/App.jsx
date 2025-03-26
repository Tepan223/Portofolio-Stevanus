import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about&skills" element={<About />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
