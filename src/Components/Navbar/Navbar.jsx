import './Navbar.css';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image_561_280x.webp';
import icon from '../../assets/cart_icon.png';
import { CartContext } from '../../Context/CartContext'; // ✅ Import context

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { cartItems } = useContext(CartContext); // ✅ Get cart items from context

  // Optional: total quantity if you allow multiple of same item
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" height="45px" />
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu("home")}>
          <Link to="/" className="nav-link">Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/mens" className="nav-link">Men</Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women" className="nav-link">Women</Link>
          {menu === "women" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={icon} alt="Cart" height="40px" /></Link>
        <div className="nav-cart-count">{totalCount}</div> {/* ✅ Dynamic Count */}
      </div>
    </div>
  );
};

export default Navbar;
