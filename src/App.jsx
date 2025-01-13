import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home'; // Updated import


function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar visible on all routes */}
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        {/* Footer visible on all routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
