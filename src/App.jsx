import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
  


function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <About/>
            <Merch/>
            <Players/>
            <CampNouBackground/>
            <Aurora
              colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
              blend={1.0}
              resolution={{ width: window.innerWidth, height: window.innerHeight }}
              amplitude={1.0}
              speed={0.5}
            />
          </>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/trophies" element={<Trophies />} />
        <Route path="/player/raphinha" element={<RaphinhaStats />} />
        <Route path="/player/lamine" element={<LamineStats />} />
        <Route path="/player/ferran" element={<FerranStats />} />
        <Route path="/player/lewandowski" element={<LewandowskiStats />} />
        
        
      </Routes>
    
    </Router>
  );
}

export default App;