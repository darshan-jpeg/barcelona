import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import { CartProvider } from './backend/CartContext.jsx';

// Components
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Merch from './Merch.jsx';
import Players from './Players.jsx';
import Login from './Login.jsx';
import Admin from './Admin.jsx';
import CampNouBackground from './CampNouBackground.jsx';
import Aurora from './Aurora';
import Trophies from './Trophies.jsx';
import RaphinhaStats from './RaphinhaStats.jsx';
import LamineStats from './LamineStats.jsx';
import FerranStats from './FerranStats.jsx';
import LewandowskiStats from './LewandowskiStats.jsx';
import AnsuFatiStats from './AnsuFatiStats.jsx';
import PedriStats from './PedriStats.jsx';
import DeJongStats from './DejongStats.jsx';

import Cart from './Cart.jsx'; // Cart Page

import './App.css';
import SponsorSection from './SponsorSection.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <About />
                <Merch />
                <Players />
                <CampNouBackground />
                <Aurora
               colorStops={["#0B0B0B", "#004D98", "#FFFFFF", "#A50044"]}




                  blend={1.0}
                  resolution={{ width: window.innerWidth, height: window.innerHeight }}
                  amplitude={1.0}
                  speed={0.5}
                />
                <SponsorSection/>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/trophies" element={<Trophies />} />
          <Route path="/cart" element={<><Navbar /><Cart /></>} />
          <Route path="/player/raphinha" element={<RaphinhaStats />} />
          <Route path="/player/lamine" element={<LamineStats />} />
          <Route path="/player/ferran" element={<FerranStats />} />
          <Route path="/player/lewandowski" element={<LewandowskiStats />} />
          <Route path="/player/ansufati" element={<AnsuFatiStats />} />
          <Route path="/player/pedri" element={<PedriStats />} />
          <Route path="/player/dejong" element={<DeJongStats />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
