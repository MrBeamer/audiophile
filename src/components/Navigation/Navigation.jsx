import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./navigation.css";

export default function Navigation(props) {
  const { onCartClick, cart } = props;
  return (
    <nav className="nav">
      <Logo />
      <div className="nav__nav-links">
        <NavLink className="nav__nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav__nav-link" to="headphones">
          Headphones
        </NavLink>
        <NavLink className="nav__nav-link" to="/speakers">
          Speakers
        </NavLink>
        <NavLink className="nav__nav-link" to="/earphones">
          Earphones
        </NavLink>
      </div>
      {cart.length > 0 ? (
        <div className="nav__cart-quantity">{cart.length}</div>
      ) : null}
      <img
        onClick={onCartClick}
        src="/images/icon-cart.svg"
        alt="shopping-cart icon"
      />
    </nav>
  );
}
