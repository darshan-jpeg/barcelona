import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);
  const lastScrollY = useRef(0); // <- useRef retains value across renders

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 150 && currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShow(true);
      } else {
        // Scrolling up or near top
        setShow(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${show ? 'navbar-show' : ''}`}>
      <ul className="nav-links">
        <li><a href="#home" className="nav-item">Home</a></li>
        <li><a href="#merch" className="nav-item">Merch</a></li>
        <li><a href="#login" className="nav-item">Login</a></li>
        <li><a href="#players" className="nav-item">Players</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
