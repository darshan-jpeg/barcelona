import React, { useContext, useState } from 'react';
import { CartContext } from './backend/CartContext';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setSuccess(false);
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);
      clearCart();
    }, 2000);
  };

  return (
    <section style={{ color: '#fff', padding: '2rem', minHeight: '60vh' }}>
      <h1>Cart</h1>
      {cart.length === 0 && !success ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.length > 0 && (
            <>
              <table style={{ width: '100%', color: '#fff', borderCollapse: 'collapse', marginBottom: '2rem' }}>
                <thead>
                  <tr>
                    <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Item</th>
                    <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Size</th>
                    <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Price</th>
                    <th style={{ borderBottom: '1px solid #fff', padding: '0.5rem' }}>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '0.5rem' }}>{item.title}</td>
                      <td style={{ padding: '0.5rem' }}>{item.size}</td>
                      <td style={{ padding: '0.5rem' }}>{item.price ? `$${item.price}` : '-'}</td>
                      <td style={{ padding: '0.5rem' }}>
                        <button onClick={() => removeFromCart(idx)} style={{
                          color: '#fff', background: '#fc2d2d', border: 'none',
                          borderRadius: '6px', padding: '0.3rem 0.7rem', cursor: 'pointer'
                        }}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2>Total: ${total}</h2>
              <button
                onClick={clearCart}
                disabled={isProcessing}
                style={{
                  color: '#fff', background: '#888', border: 'none',
                  borderRadius: '8px', padding: '0.5rem 1.2rem',
                  cursor: 'pointer', marginRight: '1rem'
                }}
              >
                Clear Cart
              </button>

              <button
                onClick={handlePayment}
                disabled={isProcessing}
                style={{
                  color: '#fff', background: '#28a745', border: 'none',
                  borderRadius: '8px', padding: '0.5rem 1.2rem',
                  cursor: isProcessing ? 'not-allowed' : 'pointer'
                }}
              >
                {isProcessing ? 'Processing...' : 'Click to Pay'}
              </button>
            </>
          )}

          {success && (
            <div style={{ marginTop: '2rem', fontSize: '1.3rem', color: '#00ff9c' }}>
              ✅ Payment Successful!
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Cart;
