import React, { useEffect, useState, useRef, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { CartContext } from './backend/CartContext';

function Navbar({ onlyHome }) {
  const [show, setShow] = useState(false);
  const lastScrollY = useRef(0); // <- useRef retains value across renders
  const { cart } = useContext(CartContext);

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
      <img src="src/Barca-Logo-No-Background.png" alt="FCB Logo" className="navbar-logo" />
      <ul className="nav-links">
        <li><a href="#home" className="nav-item">Home</a></li>
        {!onlyHome && <>
          <li><a href="#merch" className="nav-item">Merch</a></li>
          <li><Link to="/login" className="nav-item">Login</Link></li>
          <li><a href="#Players" className="nav-item">Players</a></li>
          <li><Link to="/trophies" className="nav-item">Trophies</Link></li>
        </>}
      </ul>
      <Link to="/cart" style={{ position: 'relative', marginLeft: '1.5rem', color: '#fff', textDecoration: 'none', fontSize: '1.7rem' }}>
        <span role="img" aria-label="cart">🛒</span>
        {cart.length > 0 && (
          <span style={{ position: 'absolute', top: '-8px', right: '-10px', background: '#fc2d2d', color: '#fff', borderRadius: '50%', padding: '2px 7px', fontSize: '0.9rem', fontWeight: 'bold' }}>{cart.length}</span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;
