import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Merch from './Merch.jsx';
import Aurora from './Aurora.jsx';
import Players from './Players.jsx';
import Login from './Login.jsx';
import Admin from './Admin.jsx';

function App() {

  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <About/>
            <Merch/>
            <Players/>
            
          </>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
      <Aurora
        colorStops={["#FF001F", "#0010F0", "#FF001F"]}
        blend={1.0}
        amplitude={2.0}
        speed={1.0}
      />
    </Router>
  );
}

export default App;