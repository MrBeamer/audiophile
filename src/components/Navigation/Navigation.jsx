import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./navigation.css";

export default function Navigation() {
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
      <img src="/images/icon-cart.svg" alt="shopping-cart icon" />
    </nav>
  );
}
