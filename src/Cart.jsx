import React, { useContext, useState } from 'react';
import { CartContext } from './backend/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentOption, setPaymentOption] = useState('');

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handlePayment = () => {
    if (paymentOption) {
      setTimeout(() => {
        setPaymentSuccess(true);
        clearCart();
      }, 2000);
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <section className="cart-section">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 && !paymentSuccess ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : paymentSuccess ? (
        <div className="success-box">🎉 Payment Successful!</div>
      ) : (
        <>
          {/* cart table (same as before) */}
          <div className="cart-glass-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr key={idx} className="cart-row">
                    <td>{item.title}</td>
                    <td>{item.size}</td>
                    <td>${item.price}</td>
                    <td>
                      <button className="remove-btn" onClick={() => removeFromCart(idx)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-summary">
            <h2>Total: ${total}</h2>
            <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
          </div>

          <div className="payment-box">
            <h3>Select Payment Method</h3>
            <select
              className="payment-select"
              value={paymentOption}
              onChange={(e) => setPaymentOption(e.target.value)}
            >
              <option value="">-- Choose --</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="paypal">PayPal</option>
            </select>

            <button className="pay-btn" onClick={handlePayment}>Proceed to Pay</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
