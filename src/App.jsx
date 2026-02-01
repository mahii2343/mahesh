import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppToggle from './components/WhatsAppToggle';
// import PromoPopup from './components/PromoPopup';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import BikesPage from './pages/BikesPage';
import RentalsPage from './pages/RentalsPage';

import InvestPage from './pages/InvestPage';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<BikesPage />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path="/invest" element={<InvestPage />} />
      </Routes>
      <Footer />
      <WhatsAppToggle />
    </div>
  );
}

export default App;





