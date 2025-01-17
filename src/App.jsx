import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import BackToTopButton from './components/BackToTop/Btop';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
        <Navbar/> 
          <Routes>           
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />

        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
