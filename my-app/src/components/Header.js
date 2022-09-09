import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = ({cartItems}) => {
  return (
    <div className="header">
      <ul className="header-link">
        <li className="logo">
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <span className="cart-length">
              {cartItems.length === 0 ? '' : cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
