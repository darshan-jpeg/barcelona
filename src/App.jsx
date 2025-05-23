import './App.css';
import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Merch from './Merch.jsx';
import Aurora from './Aurora.jsx';

function App() {

  return(
    <>
    <About/>
     <Navbar/>
    <Merch/>
  
<Aurora
  colorStops={["#FF001F", "#0010F0", "#FF001F"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
    </>
   

  );
  
}

export default App;