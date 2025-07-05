import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartProvider from './Context/CartContext'; // ✅ make sure this path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
