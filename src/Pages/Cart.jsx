// Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.new_price.replace('₹', '')), 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Price: {item.new_price}</p>
                  <p>Qty: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ₹{totalAmount}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
