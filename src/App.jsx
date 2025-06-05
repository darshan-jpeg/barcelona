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
            <CampNouBackground/>
          </>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    
    </Router>
  );
}

export default App;