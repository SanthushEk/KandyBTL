import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Service from './components/services/services';
import ContactUs from './components/ContactUs/ContactUs';
import BackToTopButton from './components/BackToTop/Btop';


function App() {
  return (
    <Router>
      <div className="app-container relative">
        {/* Navbar visible on all routes */}
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
        {/* Footer visible on all routes */}
        <Footer />

        {/* Back to Top Button */}
      <BackToTopButton/>
      </div>
    </Router>
  );
}

export default App;
