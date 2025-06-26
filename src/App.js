import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Navbar from './Navbar';
import Merch from './Merch';
import Cart from './Cart';
// ...other imports...

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Merch />} />
          <Route path="/cart" element={<Cart />} />
          {/* ...other routes... */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
